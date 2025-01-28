---
sidebar_label: '⚙️ Octopus Arduino Library'
sidebar_position: 2
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# ⚙️ Octopus Arduino Library

---

Depending on your Octopus, there are two different ways to configure Arduino IDE for development (Arduino Nano 33 BLE, and Arduino Nicla Vision). Both cases requires you do download libraries and configuring boards and ports to be able to flash the code needed for the Octopus.

---

## Install Octopus Firmware

To start programming your Octopus, you need to install the Octopus Firmware from Arduino libraries. 
Go to library manager, and search Octopus: 

![Octopus Library](../../../static/img/electronics/octopus-library.png)

Click **Download**. As the Octopus Firmware is dependent on other libraries, you will get a pop up window asking you to download the other packages. Click **Install all**. 

![Octopus Downloads](../../../static/img/electronics/octopus-download.png)


:::info

The firmware source files can be found in GitHub: https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/tree/main 

:::



## Add the boards to your Arduino IDE

<Tabs>
  <TabItem value="ble" label="Nano 33 BLE" default>
    To add you board to the Arduino IDE you need to select **Tools > Board > Boards Manager**.

    Search for **Arduino Mbed OS Nano Board** and click "install".  

    ![Nano Board](../../../static/img/nanoBoard.png) 

    ## Open your fist sketch


    Open the Octopus sample sketch: **File > Examples > Octopus Firmware > octopus_sample**. The sketch will appear in a new window. The window shows the example file to compile and upload to the Octopus. You don’t need to modify the file for it to work! It serves as a ready-to-use example for implementing the Octopus to collect environmental data. However, if you’d like, you’re free to customize the code right away!

    **Select your board type and port**

    You'll need to select the entry to point the editor to the currect Arduino board in the Tools > Board menu that corresponds to your Arduino board.


    Tools > Board > ArduinoMbed OS Nano Boards > Arduino Nano 33 BLE

  </TabItem>
  <TabItem value="nicla" label="Nicla Vision">
     To add you board to the Arduino IDE you need to select **Tools > Board > Boards Manager**

     Search for **Arduino Mbed OS Nicla Board** and click "install".

     ![Nicla Board](../../../static/img/niclaBoard.png)

     To setup the Nicla Vision, have a look at [Flower (Image) Classification](../../run/case3.md) example. 
  </TabItem>
</Tabs>

To choose the serial device corresponding to your board, navigate to the **Tools > Serial Port/Port** menu. If you're unsure which port corresponds to your Arduino board, you can disconnect the board and reopen the menu. The port entry that disappears should be associated with the Arduino board. Reconnect the board and select that serial port from the menu.



