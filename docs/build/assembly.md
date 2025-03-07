---
sidebar_label: '🧩 Assembly'
sidebar_position: 6
---

# 🧩 Assembly

---

## Overview

This guide will help you assemble your own Octopus based on the configuration you’ve chosen. This process should take you about **20 minutes**. <br/>
It is divided into two parts accordingly:
1. **Small octopus (standard configuration)**  : For use cases like **air temperature monitoring** or **flower classification**. This configuration is also available with an **integrated fan** that could be useful in warmer climates. *(instructions can be found at the very end of this guide)*
2. **Long octopus (expanded configuration)**  : For **air quality monitoring** with additional components.


## Standard Configuration (Air Temperature and Flower Classification)


### Step 1: prepare the bottom layer

**1.** Place the **battery** into the bottom section. <br/><br/>
![a1](../../static/img/assembly/step1_assembly.jpeg)

 <br/>
**2.** Position the **GPS module** on top of the battery in the designated slot.<br/><br/>
![a2](../../static/img/assembly/step2_assembly.jpeg)


 <br/>
**3.** Secure both the battery and GPS module using **rubber bands** around the protruding securing parts.<br/><br/>
![a3](../../static/img/assembly/step3_assembly.jpeg)
 
 <br/>

### Step 2: prepare the top layer

**1.** Insert an **SD card** into the PCB designated slot for data storage.
<br/>
![a7](../../static/img/assembly/step7_assembly.jpeg)


**2.** Pick up the PCB and plug the battery into the **port labeled “battery”** on its back. 
<br/>
![a5](../../static/img/assembly/step5_assembly.jpeg)

<br/>

**3.** Place the microcontroller on the PCB, depending on you use case *(Nicla vision for camera use, Nano for temperature and air quality)*. Pay attention to the direction of the board, if this is placed wrong you will not be able to turn on the device. Make sure that for both boards, the power-connector (indicated by the horizontal purple arrows on the boards) is pointing in the opposite direction of the RTC (yellow round part on the PCB). On the Nicla board, the camera should be in the middle of the PCB. 

![direction](../../static/img/assembly/assembly_direction.png)


 <br/>
**4.** Turn on the Arduino board by pressing the white button as shown in the picture.
<br/>
![a6](../../static/img/assembly/step6_assembly.jpeg)


 <br/>
**5.** Securely place the Arduino board in the print, making sure it is properly oriented as per the following image. 
*Note about orientation of the Arduino board:* When placing the Arduino Nicla board, make sure to place it so that the camera is centered on the PCB. If you are using Ardunio Nano, place it so that the USBc connector points in the opposite direction of the RTC (yellow, rounded component on the PCB). 
<br/>
![a8](../../static/img/assembly/step8_assembly-new.jpeg)

 <br/>
**6.** Securely attach the PCB to the part using **rubber bands**, ensuring they are wrapped tightly around the protruding sections for a stable hold.
<br/>
![a9](../../static/img/assembly/step9_assembly-new.jpeg)
<br/>

### Step 3: final assembly

**1.** Connect the GPS module to the PCB at the **“QWIIC” port**.
<br/>
![a10](../../static/img/assembly/step10_assembly-new.jpeg)
<br/>


**2.** Attach the bottom part to the head section by screwing them together.
<br/>
![a11](../../static/img/assembly/step11_assembly.jpeg)

:::tip

Ensure the wires are long enough to twist comfortably during this step.
:::

 <br/>

 **3.** If you would like to deploy your device on a tripod, make use of the 1/4 inch insert (as mentioned in the bill of materials). Turn the bottom 3D printed part **upside down**, place the insert on the **designated hole** and line the tip of your **soldering iron** with the center of the insert. Wait for a few seconds and push gently until fully inserted. 
<br/>
![a11](../../static/img/assembly/step17_assembly.jpeg)

:::warning
Make sure you are not applying pressure on the insert at an angle. The soldering iron should be positioned at a **90 degrees angle** from your 3D printed part. When inserted, remove the soldering iron immediately as it might pierce into the 3D print. 
:::

 <br/>


---


## Optional / Expanded Configuration (Air Quality Monitoring)

This version includes the **middle section** for housing the SPS30 air quality sensor.

### Step 1: prepare the middle layer

Insert the **SPS30 air quality sensor** into the middle section and ensure it is placed in its correct orientation.
<br/>
![a12](../../static/img/assembly/step12_assembly.jpeg)

:::info

When mounting the SPS30 air quality sensor, ensure the **top side with the logo and connection pins is visible**, with the smaller hole (air inlet) and the larger hole (air outlet) facing outward **towards the part openings**.
:::

<br/>

### Step 2: connect electronics

 Plug the SPS30 air quality sensor into the “air quality” port on the PCB.
<br/>
![a13](../../static/img/assembly/step13_assembly-new.jpeg)

<br/>

### Step 3: integration into final Octopus assembly

**1.** Attach the middle section to the bottom section, ensuring wires pass through the ventilation cores.
<br/>
![a14](../../static/img/assembly/step14_assembly.jpeg)


:::tip

Hold onto the wires as they pass through the ventilation cores and during the twisting process to ensure they don’t get caught between the layers.
::: 
 <br/>


**2.** Screw the head section onto the middle section after inserting all required wires to the PCB - as per previous instructions.
<br/>
![a15](../../static/img/assembly/step15_assembly.jpeg)

 <br/>
---


## Optional / Integrated Fan Configuration 

For applications in warmer climates where overheating might occur, an **integrated cooling fan can be added to the head section**. Please refer to the mechanics file section to print the appropriate part before moving forward down the assembly guide. 

### Additional Steps

**1.** Place the fan in the head layer with the **blades facing the interior of the print**. Push it into position from its center until secure.
<br/>
![a4](../../static/img/assembly/step4_assembly.jpeg)

:::tip

To safely secure the fan into position, push it from its center until you hear a *'click'* sound. 
:::

 <br/>
**2.** Solder a **2-pin right-angle male pin header** to the **'GROUND' solder pad** and the **'5V' pad**  - as shown below. <br/>
<br/>
![a16](../../static/img/assembly/step16_assembly.jpeg)

:::tip

Alternatively, if you don't have pin headers in hand, you can also cut the fan wires, solder the **black wire of the fan to the 'GROUND' solder pad** and the **red wire to the '5V' pad**. 
:::
<br/>
**3.** Repeat the steps above to plug the battery and the GPS to the PCB.  
<br/>





---


**With your Octopus fully assembled, you’re now ready to dive into the next step: setting up the Octopus Library!**<br/>
<!-- ![ay](../../static/img/assembly/stepy_assembly.png) -->
