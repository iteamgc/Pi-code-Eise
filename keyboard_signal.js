const Gpio = require('onoff').Gpio;
const rpiGpio = require('rpi-gpio');
const { exec } = require('child_process');

// Define GPIO pins for LED and Buzzer
const ledPin = new Gpio(17, 'out');
const buzzerPin = new Gpio(27, 'out');

// Function to emit light and sound
function emitSignal() {
  // Turn on LED
  ledPin.writeSync(1);
  // Turn on Buzzer
  buzzerPin.writeSync(1);

  // Turn off LED and Buzzer after 1 second
  setTimeout(() => {
    ledPin.writeSync(0);
    buzzerPin.writeSync(0);
  }, 1000);
}

// Function to handle key press
function handleKeyPress() {
  emitSignal();
}

// Set up GPIO pin for the keyboard input
rpiGpio.on('change', (channel, value) => {
  if (value) {
    handleKeyPress();
  }
});

rpiGpio.setup(7, rpiGpio.DIR_IN, rpiGpio.EDGE_BOTH);

// Clean up GPIO on exit
function exitHandler() {
  ledPin.unexport();
  buzzerPin.unexport();
  process.exit();
}

process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);

console.log('Press a key to emit signal...');