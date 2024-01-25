export const venderDataParse = (sellerData, businessFiles) => {
    const formData = new FormData();

    // Extract and format data from sections
    const sellerProfileData = {
        seller_profile: {},
        addresses: {},
        payment_info: {},
        contact_people: {},
    };

    Object.keys(sellerData).forEach((sellerDataKey) => {
        Object.keys(sellerData[sellerDataKey]).forEach((fieldKey) => {
            const fieldValue = sellerData[sellerDataKey][fieldKey];

            // Add data to the corresponding part of the sellerProfileData object
            if (sellerDataKey === "seller_profile") {
                // Assuming section 1 is for seller_profile
                sellerProfileData.seller_profile[fieldKey] = fieldValue;
            } else if (sellerDataKey === "addresses") {
                // Assuming section 2 is for addresses
                sellerProfileData.addresses[fieldKey] = fieldValue;
            } else if (sellerDataKey === "contact_people") {
                // Assuming section 3 is for documents
                sellerProfileData.contact_people[fieldKey] = fieldValue;
            } else if (sellerDataKey === "payment_info") {
                // Assuming section 4 is for payment_info
                sellerProfileData.payment_info[fieldKey] = fieldValue;
            }
            // Add similar conditionals for other sections if needed
        });
    });
    console.log("BUSINESS FILES", businessFiles);

    const fileTypes = [];
    Object.keys(businessFiles).forEach((businessFilesKey) => {
        Object.keys(businessFiles[businessFilesKey]);
        const fieldValue = businessFiles[businessFilesKey];
        // console.log("DOCUMENTS []", businessFilesKey, fieldValue);
        formData.append("documents", fieldValue.file);
        fileTypes.push(fieldValue.document_type);
        // formData.append(fieldValue.file.name, fieldValue.document_type); // 'documents' is the key for each file
    });

    formData.append("file_types", JSON.stringify(fileTypes));
    // const businessFilesArray = Array.from(businessFiles);
    // businessFiles.map((uploadFile) => {
    //     formData.append("documents", uploadFile.file); // 'documents' is the key for each file
    //     formData.append(uploadFile.file.name, documentType); // 'documents' is the key for each file
    // });

    // Convert sellerProfileData keys to snake_case and append to formData
    formData.append("json_data", JSON.stringify(sellerProfileData));

    return formData;
};
