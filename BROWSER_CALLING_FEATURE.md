# In-Browser Voice AI Demo Call Feature

## Overview
The Voice AI Live Demo now supports **in-browser calling** that works directly in the web browser without requiring external apps like FaceTime or phone dialer apps.

## Features

### ✅ Browser-Based Calling
- No external apps required (no more FaceTime issues on Mac)
- Works directly in the browser using WebRTC technology
- Cross-platform compatibility (Windows, Mac, Linux, mobile)

### 🎤 Voice Interaction
- Real-time speech recognition (Web Speech API)
- Text-to-speech responses with natural-sounding AI voice
- Live conversation transcript displayed during the call

### 🎛️ Call Controls
- **Mute/Unmute**: Toggle microphone on/off
- **Speaker**: Control audio output
- **End Call**: Terminate the call session
- **Close**: Exit the call interface

### 🤖 AI Demo Responses
Pre-programmed intelligent responses that demonstrate:
- Patient-centered communication approach
- Behavioral science principles
- Healthcare-specific AI capabilities
- Appointment scheduling simulation
- Crisis call handling sensitivity

## How It Works

1. **Click "Live Demo Call"** - Opens the in-browser call interface
2. **Grant Microphone Permission** - Browser will request microphone access
3. **Start Talking** - The AI responds with realistic healthcare scenarios
4. **View Transcript** - See the conversation in real-time
5. **Use Controls** - Mute, adjust speaker, or end call as needed

## Technical Requirements

### Supported Browsers
- ✅ Chrome 25+ (recommended)
- ✅ Firefox 22+
- ✅ Safari 11+
- ✅ Edge 79+

### Required Permissions
- **Microphone Access**: Required for voice input
- **HTTPS**: Most browsers require secure connection for microphone access

### Fallback Options
If the browser calling fails:
- Displays user-friendly error message
- Provides direct phone number: `1-855-695-2714`
- Explains common issues (permissions, HTTPS, browser support)

## Benefits Over Traditional Phone Links

### ❌ Old Problem (tel: links)
- Opens external apps (FaceTime, Phone app)
- Requires device configuration
- May not work on all devices
- No visual interface or controls

### ✅ New Solution (Browser calling)
- Works entirely in the browser
- No external app dependencies
- Visual call interface with controls
- Real-time transcript
- Cross-platform compatibility
- Professional appearance

## Implementation Details

### Web Technologies Used
- **WebRTC**: Real-time communication
- **Web Speech API**: Speech recognition
- **Speech Synthesis API**: Text-to-speech
- **getUserMedia()**: Microphone access
- **CSS Animations**: Smooth UI transitions

### User Experience Enhancements
- Animated call interface
- Visual feedback on button interactions
- Professional call UI design
- Responsive design for mobile devices
- Keyboard shortcuts (ESC to end call)

## Testing

To test the feature:
1. Open the website in a supported browser
2. Navigate to the demo section
3. Click on "Live Demo Call"
4. Grant microphone permissions when prompted
5. Speak to interact with the AI demo

## Troubleshooting

### Common Issues
1. **Microphone not working**: Check browser permissions
2. **No audio output**: Verify speaker settings
3. **Call won't start**: Ensure HTTPS connection
4. **Speech recognition issues**: Try Chrome for best support

### Browser Compatibility Notes
- Chrome provides the best experience
- Safari requires iOS 14.3+ for full functionality
- Firefox may have limited speech synthesis voices
- Older browsers fall back to direct phone number