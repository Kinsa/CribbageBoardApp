// Mock expo-sensors
jest.mock('expo-sensors', () => ({
  Accelerometer: {
    addListener: jest.fn(),
    removeAllListeners: jest.fn(),
    setUpdateInterval: jest.fn(),
  },
}));

// Mock expo-haptics
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  ImpactFeedbackStyle: {
    Light: 'light',
    Medium: 'medium',
    Heavy: 'heavy',
  },
}));

// Mock Expo Router
jest.mock('expo-router', () => ({
  Stack: {
    Screen: ({ children }) => children,
  },
}));
