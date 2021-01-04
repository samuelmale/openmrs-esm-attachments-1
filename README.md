
# OpenMRS ESM Attachments

## What is this?

openmrs-esm-attachments is an in-browser javascript module that provides a lightweight library of attachments widgets.

## How do I install this?

Requirements: Node, Git, and OpenMRS with the
[SPA Module](https://github.com/openmrs/openmrs-module-spa) installed

Currently, there are no compiled releases for openmrs-esm-attachments.
To obtain this module, use the following steps:

```bash
git clone https://github.com/openmrs/openmrs-esm-attachments
cd openmrs-esm-attachments
npm install
npm run build
```

Serve the built `dist/openmrs-esm-attachments.js` and configure it in your SPA Module's root config.

Then, have a look at the
[Frontend Implementer Documentation](https://wiki.openmrs.org/display/projects/Frontend+Implementer+Documentation)
for installing microfrontends for the SPA Module.

## Configuration

This module is designed to be driven by configuration files. These files define the look and functionality required to drive the assosiated widgets.

## Resources

* [JIRA Epic](https://issues.openmrs.org/browse/MF-?)