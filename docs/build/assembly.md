---
sidebar_label: '🧩 Assembly'
sidebar_position: 6
---

# 🧩 Assembly

This section looks into how to assemble your own Octopus. 

---

## Overview

This guide will help you assemble your own Octopus based on the configuration you’ve chosen. This process should take you about **20 minutes maximum**. <br/>
It is divided into two parts accordingly:
1. **Small octopus (standard configuration)**  : For use cases like **air temperature monitoring** or **flower classification**.
2. **Long octopus (expanded configuration)**  : For **air quality monitoring** with additional components.


## Standard Configuration (Air Temperature and Flower Classification)


### Step 1: Prepare the bottom layer

**1.** Place the **battery** into the bottom section. <br/><br/>
![a1](../../static/img/assembly/step1_assembly.png)

 <br/>
**2.** Position the GPS module on top of the battery in the designated slot.<br/><br/>
![a2](../../static/img/assembly/step2_assembly.png)


 <br/>
**3.** Secure both the battery and GPS module using rubber bands around the protruding securing parts.<br/><br/>
![a3](../../static/img/assembly/step3_assembly.png)
 

### Step 2: Prepare the top layer

**1.** Place the **fan** in the head layer with the blades facing the interior of the print  and push it into position until secure. 

:::tip

To safely secure the fan into position, push it from its center until you hear a *'click'* sound. 
:::
<br/>
[image here]


 <br/>
**2.** After selecting the appropriate head variation for the given arduino *(Nikla vision for camera use, Nano for temperature and air quality)*, **turn on** the Arduino board by pressing the white button as shown in the picture.<br/>
[image here]


 <br/>
**3.** Insert an **SD card** into the PCB designated slot for data storage.<br/>
[image here]


 <br/>
**4.** Securely place the Arduino board in the print, ensuring it is properly oriented as per the following image.
<br/>
[image here]


 <br/>
**5.** Use **rubber bands** to secure the PCB to the head’s protruding securing parts.
<br/>
[image here]


### Step 3: Plug electronics

**1.** Plug the battery into the port labeled “battery” on the PCB.
<br/>
[image here]

 <br/>
**2.** Connect the GPS module to the PCB at the “QWIIC” port.
<br/>
[image here]

 <br/>
**3.** INFO ON HOW THE FAN SHOULD BE INTEGRATED INTO THE PCB 
<br/>
[image here]


### Step 4: Final assembly

**1.** Attach the bottom part to the head section by screwing them together.
<br/>
[image here]

:::tip

Ensure the wires are long enough to twist comfortably during this step.
:::




## Optional / Expanded Configuration (Air Quality Monitoring)

This version includes the **middle section** for housing the Sensirion SPS30 sensor.

### Step 1: Prepare the middle layer

Insert the **Sensirion SPS30 sensor** into the middle section, ensuring correct orientation.
<br/>
[image here]

:::info

When mounting the Sensirion SPS30 sensor, ensure the **top side with the logo and connection pins is visible**, with the smaller hole (air inlet) and the larger hole (air outlet) facing outward **towards the part openings**.
:::


### Step 2: Connect electronics

 Plug the Sensirion SPS30 sensor into the “air quality” port on the PCB.
<br/>
[image here]


### Step 3: Integration into final octopus assembly

**1.** Attach the middle section to the bottom section, ensuring wires pass through the ventilation cores.
<br/>
[image here]

 <br/>
**2.** Screw the head section onto the middle section, connecting all required wires to the PCB.
<br/>
[image here]

---


With your Octopus fully assembled, you’re now ready to dive into the next step: setting up and modifying the Octopus firmware to suit your chosen configuration. 
