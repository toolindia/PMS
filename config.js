// MASTER CENTRAL TENANT REGISTRY
const CLIENT_REGISTRY = {
    "demo": {
        name: "Grand Heritage Residency",
        scriptUrl: "https://script.google.com/macros/s/AKfycbwYOUR_DEMO_SCRIPT_ID/exec",
        upiVpa: "merchant@bank",
        expiryDate: "2027-10-12",
        features: {
            dining: true,
            staff: true,
            feedback: true
        }
    },
    "royalstay": {
        name: "Royal Stay",
        scriptUrl: "https://script.google.com/macros/s/AKfycbyyI9WyLb1ECpXMfI90ZWGGNlMucKUcLFvMNgJ_F1tr5CRGbpnxmkAgvBkpS5jnj_kX/exec",
        upiVpa: "ofbuzz@ptyes",
        expiryDate: "2027-10-12",
        features: {
            dining: true,
            staff: true,
            feedback: true
        }
    }
};

// ofbuzz master console compatibility
const MASTER_REGISTRY = CLIENT_REGISTRY;
