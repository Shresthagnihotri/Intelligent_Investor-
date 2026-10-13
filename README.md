# Intelligent Investor — Dropdown Fixed

Inputs are exactly:
- District
- Tehsil
- Village
- Gata / Plot No.

Khasra No. and Khata No. are removed.

The District dropdown is populated immediately from the bundled administrative list, without requiring an API call. Tehsil changes when a district is selected. Village changes when a tehsil is selected.

Run:
npm install
npm start

Then open http://localhost:3000

For production, replace the bundled administrative list with the authorised UP administrative dataset/API and connect the property search to the authorised land-record interface.
