import { Layout } from "@/components/Layout";
// We import QRCodeSVG from the qrcode.react library we installed.
// This specific component takes a URL and draws an SVG image of a QR code.
import { QRCodeSVG } from "qrcode.react";

export default function GenerateQR() {
  // This is a custom function we wrote. It runs whenever the user clicks the "Download" button.
  // It takes two parameters:
  // 1. "id" (to find the specific QR code on the screen)
  // 2. "filename" (what we want to name the file when it downloads, e.g., "qr-local.png")
  const downloadQR = (id: string, filename: string) => {
    // Step 1: Find the SVG element on the page using its ID
    const svg = document.getElementById(id);
    if (!svg) return; // If we can't find it, stop running the function.

    // Step 2: Convert the SVG code into a raw string of data that the browser can understand
    const svgData = new XMLSerializer().serializeToString(svg);

    // Step 3: Create a hidden HTML <canvas> element.
    // We use a canvas because browsers can easily convert canvas drawings into PNG images!
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Step 4: Create a new hidden image object
    const img = new Image();

    // Step 5: Tell the image what to do once it finishes loading our SVG data
    img.onload = () => {
      // Set our canvas to a high resolution (1000 pixels by 1000 pixels) for crisp printing
      canvas.width = 1000;
      canvas.height = 1000;

      if (ctx) {
        // Draw a solid white background first, because QR codes must have a white background to be scannable
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw our actual QR code image on top of the white background
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      // Convert our final canvas drawing into a PNG file link
      const pngFile = canvas.toDataURL("image/png");

      // Create a temporary hidden link element, set it to download our PNG file, and simulate a click!
      const downloadLink = document.createElement("a");
      downloadLink.download = filename;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    // Step 6: Finally, give our SVG data to the image object we created in Step 4 to trigger the onload function above
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-charcoal mb-4">QR Code Generator (Admin)</h1>
          <p className="text-muted-foreground mb-12">
            This internal tool generates the high-resolution QR codes for physical product packaging
            using the <code>qrcode.react</code> library.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* --- LOCAL QR CODE SECTION --- */}
            <div className="bg-sand/10 p-8 rounded-3xl border border-honey/20 text-center">
              <h2 className="text-xl font-bold text-charcoal mb-2">Local Development</h2>
              <p className="text-sm text-muted-foreground mb-8">
                For testing on your local network.
              </p>

              <div className="bg-white p-6 rounded-xl inline-block shadow-sm mb-8">
                {/* Here we use the component from the library! We give it an ID, the URL, and tell it to be 250px wide */}
                <QRCodeSVG
                  id="qr-local"
                  value="http://192.168.29.247:3000/why-hanova"
                  size={250}
                  level="H" // 'H' means High error resistance (makes the QR code more reliable)
                />
              </div>

              <button
                // When clicked, run our download function and pass it the ID "qr-local"
                onClick={() => downloadQR("qr-local", "qr-local.png")}
                className="block w-full rounded-full bg-charcoal text-white py-3 font-semibold hover:bg-honey hover:text-charcoal transition-colors"
              >
                Download Local PNG
              </button>
            </div>

            {/* --- PRODUCTION QR CODE SECTION --- */}
            <div className="bg-sand/10 p-8 rounded-3xl border border-honey/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-honey/20 blur-2xl rounded-full" />
              <h2 className="text-xl font-bold text-charcoal mb-2 relative z-10">
                Production (Live)
              </h2>
              <p className="text-sm text-muted-foreground mb-8 relative z-10">
                For actual product packaging printing.
              </p>

              <div className="bg-white p-6 rounded-xl inline-block shadow-sm mb-8 relative z-10">
                {/* Same component, but this one points to the live hanovalifesciences.com website! */}
                <QRCodeSVG
                  id="qr-production"
                  value="https://hanovalifesciences.com/why-hanova"
                  size={250}
                  level="H"
                />
              </div>

              <button
                // When clicked, run our download function and pass it the ID "qr-production"
                onClick={() => downloadQR("qr-production", "qr-production.png")}
                className="block w-full rounded-full bg-honey text-charcoal py-3 font-semibold hover:bg-honey-deep hover:text-white transition-colors relative z-10 shadow-lg shadow-honey/20"
              >
                Download Production PNG
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
