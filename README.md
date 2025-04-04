<div align="center">
  <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/logo.png" alt="MedLink Logo" width="180" height="180" style="border-radius: 20px;" />
  
  # MedLink
  
  <h3>AI-Powered Hospital Network Management System</h3>

  [![Next.js](https://img.shields.io/badge/Next.js-13.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

  <p>Revolutionizing healthcare through AI, connectivity and centralized management.</p>
  
  <a href="https://medlink-captainsza.vercel.app">🌐 View Demo</a> •
  <a href="https://github.com/captainsza/medlink">💻 GitHub</a> •
  <a href="https://github.com/captainsza/medlink/issues">🐛 Report Bug</a>
</div>

---

## 📋 Overview

MedLink tackles pressing healthcare challenges such as inadequate doctor-patient ratios, delayed diagnoses, and limited access to healthcare schemes. Our platform creates a unified network that connects hospitals and healthcare providers to:

- 🏥 Centralize patient data management across facilities
- 📊 Track critical resources in real-time
- 🤖 Leverage AI for faster diagnostics and data retrieval
- 👨‍👩‍👧 Enhance maternal and child healthcare support in underserved areas

<div align="center">
  <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/medlink-dashboard.png" alt="MedLink Dashboard" width="80%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</div>

## 🚨 Problem Statement

Healthcare systems worldwide are burdened by:

- **Resource Constraints:** Critical shortages in medical staff and equipment, particularly affecting rural areas
- **Diagnostic Delays:** Inefficient data access leading to treatment delays and poorer patient outcomes 
- **Low Scheme Adoption:** Complex processes limiting enrollment in healthcare insurance and government programs
- **Maternal/Child Health Gaps:** Insufficient support for early identification of high-risk pregnancies and nutritional challenges

## 💡 Solution

MedLink provides a comprehensive approach through:

| Feature | Description |
|---------|-------------|
| **Universal Patient Database** | Secure, centralized repository for patient records with proper access controls |
| **AI-Powered Chatbot** | Leverages Llama 3 to provide immediate information retrieval and clinical decision support |
| **Resource Management** | Real-time tracking and optimization of hospital assets and capacity |
| **Inter-Hospital Collaboration** | Automated alert system for resource sharing during emergencies and shortages |
| **Maternal/Child Health Module** | Specialized tools for frontline workers to identify high-risk cases and provide nutritional guidance |
| **Offline Capabilities** | Local caching ensures functionality in areas with limited connectivity |

## 🌟 Key Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/database.svg" width="60" height="60" alt="Database" />
        <br />
        <b>Universal Patient Records</b>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/ai.svg" width="60" height="60" alt="AI" />
        <br />
        <b>AI-Powered Analysis</b>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/resources.svg" width="60" height="60" alt="Resources" />
        <br />
        <b>Resource Tracking</b>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/alerts.svg" width="60" height="60" alt="Alerts" />
        <br />
        <b>Smart Alerts</b>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/maternal.svg" width="60" height="60" alt="Maternal" />
        <br />
        <b>Maternal/Child Health</b>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/offline.svg" width="60" height="60" alt="Offline" />
        <br />
        <b>Offline Support</b>
      </td>
    </tr>
  </table>
</div>

## 🔧 Architecture

MedLink employs a microservices architecture for scalability and flexibility:

```mermaid
graph TD
    A[Front-End Layer: Next.js/TypeScript] --> B[API Gateway]
    B --> C[Resource Service]
    B --> D[Patient Data Service]
    B --> E[AI Service]
    B --> F[Collaboration Service]
    B --> G[Maternal/Child Service]
    B --> H[Scheme Service]
    C --> I[Database Layer: MongoDB/Prisma]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I
```

- **Resource Service:** Tracks hospital resources in real-time
- **Patient Data Service:** Securely manages patient records
- **AI Service:** Powers chatbot and diagnostic features using Llama 3
- **Collaboration Service:** Facilitates inter-hospital communication
- **Maternal/Child Service:** Provides specialized health analytics
- **Scheme Service:** Maps patients to applicable healthcare schemes

## 🛠️ Technology Stack

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="70" height="70" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="70" height="70" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="70" height="70" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="70" height="70" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" width="70" height="70" />
  <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/icons/llama.png" alt="llama" width="70" height="70" />
</div>

## 📊 Project Status

MedLink is currently in development for the Pragati AI for Impact Hackathon 2025.

<div align="center">
  <table>
    <tr>
      <td><b>Overall Progress:</b></td>
      <td>
        <img src="https://progress-bar.dev/30?title=Completed&width=120&color=22c55e" />
      </td>
    </tr>
    <tr>
      <td><b>Database Design:</b></td>
      <td>
        <img src="https://progress-bar.dev/60?width=120&color=06b6d4" />
      </td>
    </tr>
    <tr>
      <td><b>UI/UX Design:</b></td>
      <td>
        <img src="https://progress-bar.dev/45?width=120&color=06b6d4" />
      </td>
    </tr>
    <tr>
      <td><b>AI Integration:</b></td>
      <td>
        <img src="https://progress-bar.dev/25?width=120&color=06b6d4" />
      </td>
    </tr>
    <tr>
      <td><b>API Development:</b></td>
      <td>
        <img src="https://progress-bar.dev/35?width=120&color=06b6d4" />
      </td>
    </tr>
  </table>
</div>

## 🚀 Installation and Setup

To set up MedLink locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/captainsza/medlink.git
   cd medlink
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_URL=your_api_url
   # Add other environment variables as needed
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 👥 Team

MedLink is being developed by Team QUBITRULES:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/captainsza">
        <img src="https://github.com/captainsza.png" width="100px" alt="Zaid Ahmad"/>
        <br />
        <sub><b>Zaid Ahmad</b></sub>
      </a>
      <br />
      <sub>Team Lead</sub>
    </td>
    <td align="center">
      <a href="https://github.com/captainsza">
        <img src="https://github.com/identicons/developer1.png" width="100px" alt="Ayan Ahmad"/>
        <br />
        <sub><b>Ayan Ahmad</b></sub>
      </a>
      <br />
      <sub>Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/captainsza">
        <img src="https://github.com/identicons/developer2.png" width="100px" alt="Ashish"/>
        <br />
        <sub><b>Ashish</b></sub>
      </a>
      <br />
      <sub>Developer</sub>
    </td>
  </tr>
</table>

## 🤝 Contributing

We welcome contributions to MedLink! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

For any inquiries about MedLink, please reach out to:

- **Zaid Ahmad** - Team Lead - [GitHub](https://github.com/captainsza)

---

<div align="center">
  <a href="https://medlink-captainsza.vercel.app">
    <img src="https://raw.githubusercontent.com/captainsza/medlink/main/public/powered-by.svg" alt="Powered By" width="200" height="60" />
  </a>
  <p>Made with ❤️ for better healthcare</p>
</div>
