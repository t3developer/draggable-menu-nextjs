import type { Metadata } from "next";
import "./globals.css";
import { blMelody, inter } from "./fonts";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Fillout: Draggable Menu",
  description: "A draggable menu with context and popup menues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${blMelody.variable}`}
      >
        <div className="absolute inset-0 top-0 -z-1 overflow-hidden xs:block">
          <svg className="absolute inset-0 h-full w-full scale-[1.18] object-cover" width="1432" height="876" viewBox="0 0 1432 876" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M701.962 875.547C193 875.547 -64.3072 601.437 -64.3072 53.2181C-64.3072 -206.762 14.8639 -455.439 142.104 -599.558C269.345 -743.678 475.757 -819.976 733.066 -819.976C981.892 -819.976 1165.68 -752.155 1284.44 -619.339C1417.34 -472.394 1496.51 -223.717 1496.51 56.0441C1496.51 598.611 1227.89 875.547 701.962 875.547Z" fill="#FFEEC2" fillOpacity="0.4"></path><path d="M705.836 821.662C336.268 821.662 149.431 622.468 149.431 224.08C149.431 35.1538 206.919 -145.558 299.311 -250.289C391.703 -355.02 541.584 -410.466 728.421 -410.466C909.099 -410.466 1042.55 -361.181 1128.79 -264.664C1225.29 -157.88 1282.77 22.8325 1282.77 226.134C1282.77 620.414 1087.72 821.662 705.836 821.662Z" fill="#FFEEC2" fillOpacity="0.4"></path><path d="M709.679 765.982C478.333 765.982 361.374 641.123 361.374 391.405C361.374 272.981 397.361 159.707 455.198 94.0595C513.034 28.4119 606.858 -6.34275 723.817 -6.34274C836.919 -6.34273 920.461 24.5502 974.442 85.0491C1034.85 151.984 1070.84 265.258 1070.84 392.692C1070.84 639.836 948.737 765.982 709.679 765.982Z" fill="#FFEEC2" fillOpacity="0.4"></path><path d="M713.029 717.488C602.334 717.488 546.372 657.672 546.372 538.039C546.372 481.306 563.591 427.04 591.265 395.59C618.939 364.141 663.832 347.491 719.794 347.491C773.911 347.491 813.884 362.291 839.713 391.274C868.617 423.34 885.836 477.606 885.836 538.656C885.836 657.055 827.414 717.488 713.029 717.488Z" fill="#FFEEC2" fillOpacity="0.4"></path>
          </svg>
        </div>
        <header className="flex-none">
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
