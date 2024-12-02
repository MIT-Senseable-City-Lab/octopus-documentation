---
sidebar_label: '🔩 Mechanics (files)'
sidebar_position: 5
---

# 🔩 Mechanics (files)

This section of the documentation serves as a guide for fabricating your own Octopus. 

---

## Design Overview

The design consists of three distinct components, each serving specific functions: 

**1. Top layer (head):**
- Houses the PCB (and temperature sensor) and an integrated cooling fan.
- Acts as the top cover for the device, providing access to essential electronic components.

**2. Bottom layer (legs):** 
- Encases the battery and GPS module.
- Provides the possibility to attach the device to various surfaces.

**3.  Middle layer (optional):** 
- Designed to house the Particulate Matter sensor (Sensirion SPS30).
- Enhances functionality by adding air quality sensing capabilities.


## List of Parts

| File Name   | Image       | Supports?   | Printing Time   | Download    |
| ----------- | ----------- | ----------- | --------------- | ----------- |
| *octopus-top.stl*      | ![Head](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/imgs/otopus_top-layer_perspective.png)      | Title       | Title           | [Link  ](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/octopus_top.stl)      |
| *octopus-bottom.stl*   |  ![Legs](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/imgs/otopus_bottom-layer_perspective.png)      | Title       | Title           | [Link](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/octopus_bottom.stl)        |
| *octopus-middle.stl **(optional)***  |  ![Optional Sensing](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/imgs/otopus_middle-layer_perspective.png)       | Title       | Title           | [Link](https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/blob/main/octopus_middle.stl)        |



## 3D Printing 
### Material and Suggested Settings

:::tip

**Printing in white or light colors is recommended to minimize heat absorption and prevent overheating of internal components, especially for outdoor or high-temperature environments.** 
:::


### Printer Settings
- **Layer Height:** 0.2 mm (recommended for standard quality) 
- **Wall Thickness:** 1.2 mm
- **Infill Density:** 10%-20% (adjust based on strength requirements)
- **Print Speed:** 50-70 mm/s
- **Support Type:** Tree (auto), with overhang angle set to 30°


### Supports

*add image of the support layers*

