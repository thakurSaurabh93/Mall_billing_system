# Mall Billing System

A modern, professional Mall Billing System featuring a high-performance **C++ Backend** and a premium **React-based Web UI**. This project adheres to the **Single Responsibility Principle (SRP)** and follows a modular architecture for scalability and maintainability.

## 🚀 Features

- **Hybrid Architecture**: Fast C++ logic for financial calculations combined with a sleek React frontend.
- **Home Dashboard**: Real-time stats and activity overview.
- **Product Management**: Easily add products to the system inventory.
- **Smart Cart**: Interactive cart with dynamic subtotal updates.
- **Calculations Engine**: Handles 18% GST and custom discounts with precision.
- **Professional Invoices**: Generates printable, detailed transaction summaries.
- **Modern UI/UX**: minimalist design with a clean Blue & White theme.

## 📂 Project Structure

- `/backend`: Core logic implemented in C++.
  - `CartModule`, `StorageModule`, `TaxModule`, `BillingModule`, `InvoiceModule`.
- `/src`: Modern UI built with React & Vite.
  - `/components`: Shared UI elements like the Sidebar.
  - `/views`: Interactive screens (Dashboard, Cart, Checkout, etc.).
  - `/modules`: JS-based logic modules (can interface with C++).

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [C++ Compiler](https://gcc.gnu.org/) (GCC/MinGW)

### Installation

1. Clone the repository (once uploaded):
   ```bash
   git clone https://github.com/yourusername/mall-billing-system.git
   cd mall-billing-system
   ```

2. Install UI dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### 1. Start the React UI
```bash
npm run dev
```

#### 2. Run the C++ Backend Engine
```bash
cd backend
g++ -o billing_engine main.cpp StorageModule.cpp CartModule.cpp TaxModule.cpp BillingModule.cpp InvoiceModule.cpp
./billing_engine
```

## 📜 Principles Applied

- **SRP (Single Responsibility Principle)**: Every class and function has one reason to change.
- **Modular Design**: UI and Business Logic are decoupled for easier testing and extension.
- **Clean Code**: Adheres to modern standards for both C++ (C++17) and JavaScript (ES6+).

## 📄 License
MIT
