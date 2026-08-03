# EMFular-Integration

This project is part of [EMFular](https://github.com/softlang/EMFular).
It wires the other EMFular packages into ready-to-use editors and helpful services and components for your own graphical modeling editors.
Please refer to the version compatibilities listed below for more details.

## Current Features
EMFular-integration currently offers:
* **editor-level services and components:** model service, on top of model-edit-service, history-service of EMFular-tool; editor toolbars to wire the model service methods with buttons; drawing canvas with or without tree components, ready editor shells, connecting the toolbars, canvas and services into one component.
* **details services and components:** Detail views (tree-based) and services to open and close them. Components wire the service actions to their click events.
* **graphical components**: all basic components from EMFular-diagram plus the referencable box.

## Versions
From **integration version 1.0.0** on, we switch to the new packages:
    
    `"emfular-core": "^1.1.0",
    "ngx-emfular-diagram": "^1.0.1",
    "ngx-emfular-tool": "^1.0.0"`

The functionality in integration itself is the same as off 0.4.1, but since a newer core version is used, many improvements are included.
Older versions from 0.1.0 on all required the same version range for the core, tool, and diagram libraries, so we recommend using the latest version (0.4.1), if you must stay with `"emfular": ">=9.0.0 <11.0.0"`.

### Older Versions
| **Integration Version** | **Features** | **Required Core, Tool, and Diagram** |
| --- | --- | --- |
| 0.4.1 | Details components, Tree-based Editors and single re-usable graphical components |  "emfular": ">=9.0.0 <11.0.0", "ngx-emfular-helper": "^1.0.0", "ngx-svg-graphics": "^3.0.0" | 
| 0.1.0 | Referencable box component, basic wiring of core + tool |   "emfular": ">=9.0.0 <11.0.0", "ngx-emfular-helper": "^1.0.0", "ngx-svg-graphics": "^3.0.0" |



## Support
Support is currently offered by the main developer, Susanne Göbel under goebel@uni-koblenz.de.

## Contributing
We are open to contributors. Maybe you would like to write your bachelor's or master's thesis on EMFular? Read our [arXiv-paper](https://arxiv.org/abs/2606.11442) and get in touch with Susanne Göbel goebel@uni-koblenz.de.

## License
EMFular-integration is subject to (C) 2026, SoftLang Research Team, University of Koblenz, Faculty of CS, contact Susanne Göbel or Ralf Lämmel.
It is provided under the ***CC BY 4.0 license***.
Basically, you are free to share and adapt the material as long as you give proper credit to us and our project.
Feel free to include EMFular into your research but please cite us.
