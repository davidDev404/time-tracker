# Time Tracker

A lightweight desktop application for monitoring running processes, built to learn Tauri fundamentals.

## Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Rust (Tauri)
- **Process Monitoring**: sysinfo

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run tauri dev

# Build for production
npm run tauri build
```

## Project Structure
```
time-tracker/
├── src/                    # React frontend
│   ├── App.tsx            # Main component
│   └── ProcessCard.tsx    # Process display component
├── src-tauri/             # Rust backend
│   └── src/
│       └── lib.rs         # Process monitoring logic
└── package.json
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What The Fuck You Want To Public License