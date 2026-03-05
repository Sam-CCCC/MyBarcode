# BarcodePro - Professional Label System V6.1

A powerful, browser-based bulk barcode and QR code generator designed for logistics, warehouse management, and small businesses.



## 🚀 Key Features

- **Multi-Format Support**: Generate Code 128, EAN-13, Code 39, and high-density **PDF417** or **Data Matrix**.
- **Excel Batch Processing**: Import data directly from `.xlsx` files to generate hundreds of labels in seconds.
- **Pure Offline Capability**: Powered by Service Worker (PWA). No internet required after the first load. Data stays on your device—100% private.
- **Image Export**: Export labels as high-quality PNG images for easy sharing or professional printing.
- **Multi-Language**: Built-in support for English, Chinese, Japanese, Korean, Spanish, French, and German.

## 🛠 Tech Stack

- **Core Engines**: [bwip-js](https://github.com/metafloor/bwip-js) (Advanced Barcodes), [jsbarcode](https://github.com/lindell/JsBarcode).
- **QR Engine**: [qrcode.js](https://github.com/davidshimjs/qrcodejs).
- **Data Handling**: [SheetJS (XLSX)](https://github.com/SheetJS/sheetjs).
- **Rendering**: [html2canvas](https://github.com/niklasvh/html2canvas).

## 📦 How to Use

1. **Manual Entry**: Type your data (one per line) in the text area.
2. **Excel Import**: Upload your spreadsheet; the first column will be used as the data source.
3. **Settings**: Choose your protocol (e.g., PDF417), set the title, and adjust scales.
4. **Action**: Click "Generate" to preview, then "Print" or "Save as PNG".

## 🛡 Privacy & Security

This application is a **Client-Side Only** tool. 
- No data is uploaded to any server.
- No tracking or analytics cookies.
- Perfect for sensitive inventory and internal business data.

## 📄 License

MIT License - Feel free to use for personal or commercial projects.
