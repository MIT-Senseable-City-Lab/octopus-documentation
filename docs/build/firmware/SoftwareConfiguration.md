---
sidebar_label: 'Software Configuration'
sidebar_position: 2
---

# **Software Configuration**

---

Depending on your Octopus, there are two different ways to configure Arduino IDE for development (Arduino Nano 33 BLE, and Arduino Nicla Vision). Both cases requires you do download libraries and configuring boards and ports to be able to flash the code needed for the ocotopus.

---

## Add the boards to your Arduino IDE

To add you board to the Arduino IDE you need to select **Tools menu**, then **Board** and last **Boards Manager**.

**Nano 33 BLE** | **Nicla Vision**
Search for **Arduino Mbed OS Nano Board** and click "install". | Search for **Arduino Mbed OS Nicla Board** and click "install".
![Nano Board](../../../static/img/nanoBoard.png) | ![Nicla Board](../../../static/img/niclaBoard.png)

_NOTE: Please be aware that this core consists of multiple files, and the installation process may take a few minutes._

## Installing Drivers for the Boards

With the Mbed OS core installed you can procees with the driver installation.

**Open your fist sketch**

**Nano 33 BLE** | **Nicla Vision**
Open the HelloOctopus example sketch: **File > Examples > Octopus Nano > HelloOctopus**. The sketch will appear in a new window. | [input guide with OpenMV]?

**Select your board type and port**

You'll need to select the entry in the Tools > Board menu that corresponds to your Arduino board.

**Nano 33 BLE** | **Nicla Vision**
**Tools > Board > ArduinoMbed OS Nano Boards > Arduino Nano 33 BLE** | **Tools > Board > ArduinoMbed OS Nicla Boards > Arduino Nicla Vision**

To choose the serial device corresponding to your board, navigate to the **Tools > Serial Port/Port** menu. If you're unsure which port corresponds to your Arduino board, you can disconnect the board and reopen the menu. The port entry that disappears should be associated with the Arduino board. Reconnect the board and select that serial port from the menu.

**Please Read**

[case about arduino nano 33 ble only having 3.3V, not 5V that is commonly used with the other boards]
