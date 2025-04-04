# MedLink - AI-Powered Hospital Network Management System

MedLink is an innovative AI-powered hospital network management system designed to revolutionize healthcare delivery. By connecting hospitals and streamlining resource management, MedLink aims to improve patient care, optimize resource allocation, and support underserved communities through centralized data management and AI assistance.

## Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Process](#project-process)
- [Installation and Setup](#installation-and-setup)
- [Contributing](#contributing)
- [Team](#team)
- [References](#references)
- [License](#license)

## Overview
MedLink tackles pressing healthcare challenges such as inadequate doctor-patient ratios, delayed diagnoses, and limited access to healthcare schemes. The platform connects hospitals through a network that facilitates:
- Centralized patient data management
- Real-time resource tracking
- AI-powered data retrieval and diagnostics
- Enhanced support for maternal and child health in rural areas

## Problem Statement
Healthcare systems are burdened by:
- **Resource Constraints:** Severe shortages in medical staff and equipment, especially in rural areas.
- **Delayed Diagnoses:** Inefficient data access contributes to critical delays in patient care.
- **Low Scheme Awareness:** Limited enrollment in healthcare insurance and government schemes due to complex processes.
- **Maternal and Child Health Challenges:** Under-nutrition and delayed identification of high-risk pregnancies affecting vulnerable populations.

## Solution Overview
MedLink provides a holistic approach by integrating:
- **Universal Patient Database:** A secure, centralized repository of patient records.
- **AI-Powered Chatbot:** Immediate, accurate data retrieval and decision support powered by models like Llama 3.
- **Resource Management:** Real-time tracking and updates of hospital resources to optimize capacity.
- **Inter-Hospital Collaboration:** Automated alerts and notifications to enable resource sharing during shortages.
- **Dedicated Maternal/Child Health Module:** Special features to assist frontline workers (e.g., ASHA) in high-risk pregnancy detection, dietary advice, and scheme mapping.
- **Offline Capabilities:** Local caching to ensure functionality in areas with limited connectivity.

## Key Features
- **Resource Management:** Monitor hospital assets (beds, equipment, ventilators) in real time.
- **Universal Patient Database:** Secure storage and easy access to patient histories.
- **AI Chatbot:** Rapid query resolution to support doctors in diagnostic and treatment processes.
- **Inter-Hospital Alerts:** Automated notifications for resource sharing during emergencies.
- **Maternal/Child Health Module:** Targeted support for frontline workers to improve maternal and child health outcomes.
- **Scheme Mapping:** Automated eligibility checks and enrollment support for healthcare schemes.
- **Offline Access:** Ensures continuous functionality in low-connectivity environments.

## Architecture
MedLink utilizes a microservices architecture to ensure scalability and flexibility:
- **Resource Service:** Tracks hospital resources and updates availability in real time.
- **Patient Data Service:** Manages secure access to patient records.
- **AI Service:** Powers the chatbot and diagnostic features using open-source AI models.
- **Collaboration Service:** Facilitates inter-hospital resource sharing with real-time alerts.
- **Maternal/Child Service:** Provides specialized analytics and guidance for maternal and child health.
- **Scheme Service:** Automates the mapping of patient profiles to appropriate healthcare schemes.

Services communicate via RESTful APIs. The front-end is built using Next.js/Typescript, while the back-end leverages Python for analytics and machine learning tasks. Cloud deployment and offline support are integrated to ensure the system is robust and adaptable to various environments.

## Technology Stack
- **Front-End:** Next.js, Typescript
- **Back-End:** Python (Analytics, Machine Learning)
- **Database:** MongoDB with Prisma ORM
- **AI Models:** Llama 3 (with potential alternatives like Gemini)
- **Architecture:** Microservices communicating via RESTful APIs
- **Data Sources:** Public datasets (e.g., MIMIC-III), PubMed, and synthetic data for testing

## Project Process
MedLink was conceptualized for the Pragati AI for Impact Hackathon 2025 by Team **QUBITRULES** (Team Leader: Zaid Ahmad). The initial project process involves:
1. **Idea Submission & Validation:** Aligning the project with hackathon themes and defining clear objectives.
2. **System Design & Architecture:** Establishing a scalable microservices framework and defining key roles (Super Admin, Hospital Admin, Doctors, etc.).
3. **Prototype Development:** Building core components such as the universal patient database and AI-powered chatbot.
4. **Testing & Feedback:** Validating functionalities with public datasets (MIMIC-III) and synthetic data.
5. **Iterative Enhancements:** Expanding features based on pilot testing—such as the maternal/child health module and offline capabilities.

## Installation and Setup
To set up MedLink locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/MedLink.git
   cd MedLink
