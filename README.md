

## Project Overview

MedBot2 is a full-stack application that provides a mental health support AI therapist named Jennifer. The application offers empathetic, non-judgmental support to users seeking emotional guidance through a conversational interface with speech recognition capabilities.

## Tech Stack

### Frontend
- **Framework**: Next.js 14.2.3 (App Router)
- **UI Library**: React 18.3.1
- **Styling**: TailwindCSS with custom configuration
- **Animations**: Framer Motion 11.18.2
- **Internationalization**: i18next/react-i18next

### Backend
- **Runtime**: Node.js
- **API Routes**: Next.js API routes
- **AI Integration**: OpenAI API

### Audio Processing
- **Speech Recognition**: react-speech-recognition 3.10.0
- **Voice Synthesis**: ElevenLabs 1.50.5
- **Audio Visualization**: 
  - react-audio-visualize 1.2.0
  - wavesurfer.js 7.9.0
  - @wavesurfer/react 1.0.9

### Data Management
- **Client-Side Storage**: sessionStorage
- **PDF Generation**: jsPDF 2.5.2 with jspdf-autotable 3.8.4
- **HTML to Canvas**: html2canvas 1.4.1

## Project Structure

```
medbot2/
├── app/                           # Next.js App Router directory
│   ├── api/                       # API routes
│   │   └── fetch-data/            # AI integration endpoint
│   ├── start-call/                # Main conversation interface
│   ├── summary/                   # Assessment summary page
│   ├── globals.css                # Global styles
│   └── layout.tsx                 # Root layout
├── public/                        # Static assets
├── utils/                         # Utility functions
│   └── i18n.ts                    # Internationalization setup
├── components/                    # Reusable components
├── contexts/                      # React contexts (Auth, etc.)
└── EmergencyNumbers.ts            # Emergency contact information
```

## Core Features

### 1. Conversational Interface

The main conversation interface is implemented in page.tsx, featuring:

- Real-time speech recognition
- Audio recording and playback
- Voice synthesis for AI responses
- Audio visualization during playback
- Session persistence using sessionStorage

### 2. Multi-language Support

The application supports multiple languages through react-i18next:

- Language selection via a globe icon
- Persistence of language preference in sessionStorage
- AI responses dynamically generated in the user's selected language

### 3. Mental Health Assessment

- Collection of user responses to mental health assessment questions
- Storage of assessment data in sessionStorage
- Integration of assessment data into AI context for personalized support

### 4. Report Generation

The summary page (`app/summary/page.tsx`) allows users to:
- Review conversation history
- View mental health assessment results
- Generate and download a PDF report containing conversation and assessment data

### 5. Audio Processing

- Real-time speech transcription
- Audio recording with visualization
- Playback controls for AI responses with waveform visualization
- Audio progress tracking

## API Integration

### OpenAI Integration

The application uses OpenAI's API for generating conversational responses. The API route is defined in route.ts with the following functionality:

- System prompts tailored to the user's selected language
- Context maintenance through conversation history
- Personalization based on mental health assessment data

### ElevenLabs Integration

Text-to-speech functionality is provided through ElevenLabs:
- Audio synthesis from AI text responses
- Return of audio data for playback in the client

## Data Flow

1. User speaks or types a message
2. Message is transcribed and stored in conversation history
3. Message is sent to backend API along with conversation history and assessment data
4. OpenAI generates a textual response
5. Response is converted to speech using ElevenLabs
6. Audio response is returned to client and played back
7. Both user message and AI response are added to conversation history in sessionStorage

## Styling and UI

- Custom TailwindCSS configuration
- Geist font integration
- Responsive design for different screen sizes
- Custom audio controls and visualization
- Accessibility considerations for UI elements

## Security and Privacy

- Client-side storage only (sessionStorage)
- Emergency contact information provided for crisis situations

## Development Environment

- Package management: pnpm
- TypeScript for type safety
- ESLint for code quality
- Environment variables for API keys

## Internationalization

The application supports multiple languages through i18next, with translations for:
- UI elements
- System prompts for AI
- Assessment questions and responses
- Generated reports

## Deployment

The application is configured for deployment on AWS EC2 with:
- Next.js optimization
- API routes for serverless functions
- Environment variable configuration

## Dependencies

Key dependencies include:
- axios for API requests
- react-speech-recognition for speech input
- wavesurfer.js for audio visualization
- jsPDF for report generation
- framer-motion for UI animations
- tailwindCSS for styling
- i18next for internationalization

## System Requirements

- Node.js runtime (18.13.0 or higher recommended)
- Modern web browser with speech recognition support
- Internet connection for API access

---
