document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user");

    const response = getBotResponse(userInput);
    addMessage(response, "bot");

    document.getElementById("user-input").value = "";
});

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = text;
    document.getElementById("chat-output").appendChild(messageElement);
    document.getElementById("chat-output").scrollTop = document.getElementById("chat-output").scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hi":"Hello! How can I assist you today?",
        "hello":"Hello! How can I assist you today?",
        "hey there":"Hello! How can I assist you today?",
        "good morning":"Good day! How can I help you today?",
        "good afternoon":"Good day! How can I help you today?",
        "good evening":"Good day! How can I help you today?",
        "how are you":"I am just a farming chatbot, but I am here to help you!",
        "what is your name":"I am the Farming Chatbot, your virtual assistant.",
        "what can you do":"'I can provide information about farming, answer your queries, and help you with various tasks related to agriculture.",
        "thank you":"You are welcome! Is there anything else I can help you with?",
        "how can you help me":"'I can assist you with farming information, answer your queries, and help with agricultural tasks. What do you need help with?",
        "i have a question":"Sure, feel free to ask your question!",
        "can you assist me with something":"Absolutely! What do you need assistance with?",
        "i need help with my farm":"'I'm here to help! What specific issue are you facing with your farm?",
        "what services do you offer":"'I offer information on farming, crop management, pest control, and more. How can I assist you today?",
        "i have a problem with my crops":"'I'm sorry to hear that. Could you provide more details so I can help?",
        "weather forecasting": "I can provide real-time weather updates and forecasts.",
        "soil health monitoring": "I can analyze soil composition and health.",
        "crop health monitoring": "I can track the growth stages of your crops.",
        "disease and pest detection": "I can identify pests and diseases in your crops.",
        "growth process monitoring": "I can monitor the growth process from seeding to harvesting.",
        "government schemes": "I can provide information on relevant government schemes and subsidies.",
        "financial tools": "I can assist with budgeting, ROI, and profit margin calculations.",
        "community building": "I can connect you with local and global farming communities.",
        "disaster and insurance support": "I can guide you on disaster preparedness and recovery.",
        "agriculture marketplace": "I can help you list and sell your produce.",
        "irrigation management": "I can advise on efficient irrigation techniques.",
        "fertilization": "I can provide personalized fertilization plans.",
        "seed selection": "I can recommend the best seed varieties for your region.",
        "harvesting": "I can provide tips on the best harvesting practices.",
        "pest control": "I can offer integrated pest management strategies.",
        "crop rotation": "I can plan effective crop rotations to maintain soil health.",
        "sustainable farming practices": "I can help implement eco-friendly farming techniques.",
        "market trends": "I can update you on market trends and prices.",
        "post-harvest management": "I can advise on best practices for post-harvest handling.",
        "organic certification": "I can guide you through the organic certification process.",
        
        // Additional Questions and Answers
        "What will the weather be like tomorrow?": "Tomorrow's forecast shows sunny skies with temperatures between 18°C and 32°C.",
        "How do I check my soil's pH level?": "Use a soil pH testing kit. Follow the instructions, and it will show your soil's pH level.",
        "How can I tell if my crops are healthy?": "Look for strong, green leaves and no signs of pests or diseases. Regularly check using drones or AI tools.",
        "What is causing the spots on my crops?": "The spots could be due to diseases or pests. Use AI tools to identify the problem and get suggestions for remedies.",
        "How can I ensure my crops are growing well?": "Monitor the growth stages with AI tools and follow best practices for watering, fertilizing, and pest control.",
        "How do I apply for government subsidies?": "Visit the government agriculture website, find the relevant schemes, and fill out the application forms.",
        "How can I calculate a loan for my farm?": "Use online loan calculators to input your loan amount, interest rate, and duration to get monthly payment estimates.",
        "How can I join local farmer groups?": "Search online for local farmer groups or visit community centers. Joining online forums and social media groups also helps.",
        "What should I do if my crops are damaged?": "Contact your insurance company to file a claim and seek advice on disaster recovery resources from local authorities.",
        "How do I sell my produce?": "List your products on online agriculture marketplaces or contact local buyers and markets to arrange sales.",
        "How often should I water my crops?": "Water your crops based on weather conditions and soil moisture levels. Smart irrigation systems can help optimize watering.",
        "What type of fertilizer should I use?": "Use fertilizers based on soil test results. Organic and inorganic fertilizers.", 
        "How can I improve soil fertility?": "Use organic matter like compost and manure, and practice crop rotation to enhance soil fertility.",
        "What are the best cover crops?": "Clover, rye, and vetch are excellent cover crops for improving soil health and reducing erosion.",
        "How do I prevent soil erosion?": "Implement contour farming, terracing, and maintain ground cover with cover crops to prevent soil erosion.",
        "How can I manage water resources effectively?": "Utilize rainwater harvesting, drip irrigation, and mulching to conserve and manage water resources.",
        "What are the benefits of using organic pesticides?": "Organic pesticides are environmentally friendly, reduce chemical exposure, and support biodiversity.",
        "How can I attract pollinators to my farm?": "Plant flowering plants, create habitats, and avoid chemical pesticides to attract pollinators.",
        "What are precision farming techniques?": "Use GPS, drones, and AI to monitor crops, manage inputs efficiently, and optimize yields.",
        "How can I reduce greenhouse gas emissions in farming?": "Practice no-till farming, use cover crops, and implement carbon sequestration techniques.",
        "What are the advantages of vertical farming?": "Vertical farming saves space, reduces water usage, and allows for year-round crop production.",
        "How can I get certified for organic farming?": "Follow organic farming practices, maintain records, and apply for certification from recognized bodies.",
        "What are integrated pest management (IPM) strategies?": "IPM combines biological, cultural, physical, and chemical tools to manage pests sustainably.",
        "How do I start a farmers' market?": "Find a suitable location, gather local farmers, obtain permits, and promote the market in your community.",
        "What are the best practices for sustainable farming?": "Use renewable resources, practice crop rotation, and reduce chemical inputs for sustainable farming.",
        "How can I improve crop yields?": "Optimize planting times, use quality seeds, manage soil health, and monitor crop growth with technology.",
        "What are the benefits of agroforestry?": "Agroforestry integrates trees and crops, improves biodiversity, and enhances soil and water conservation.",
        "How can I manage livestock sustainably?": "Implement rotational grazing, provide adequate shelter, and maintain animal health for sustainable livestock management.",
        "What are the advantages of using drones in farming?": "Drones provide real-time data on crop health, monitor fields efficiently, and reduce labor costs.",
        "How can I reduce post-harvest losses?": "Use proper storage techniques, handle crops carefully, and use technology to monitor storage conditions.",
        "What are the benefits of urban farming?": "Urban farming provides fresh produce locally, reduces transportation costs, and improves urban green spaces.",
        "How can I implement agroecology practices?": "Focus on ecological principles, diversify crops, and integrate livestock for a holistic farming approach.",
       "What are the benefits of crop diversification?": "Crop diversification reduces risk, improves soil health, and enhances farm biodiversity.",
       "How can I control weeds effectively?": "Use methods like mulching, crop rotation, and mechanical weeding to control weeds effectively.",
       "What are the signs of nutrient deficiency in crops?": "Look for symptoms like yellowing leaves, stunted growth, and poor yields to identify nutrient deficiencies.",
       "How can I protect my crops from extreme weather?": "Use protective structures like greenhouses, shade nets, and windbreaks to shield crops from extreme weather.",
       "What are the benefits of using biofertilizers?": "Biofertilizers improve soil fertility, enhance nutrient uptake, and reduce the need for chemical fertilizers.",
       "How can I improve water efficiency in farming?": "Implement practices like drip irrigation, mulching, and rainwater harvesting to improve water efficiency.",
       "What are the best practices for storing harvested crops?": "Store crops in cool, dry, and well-ventilated conditions to maintain quality and reduce spoilage.",
       "How can I increase the market value of my produce?": "Focus on quality, diversify your product range, and build strong relationships with buyers to increase market value.",
       "What are the benefits of using renewable energy on farms?": "Renewable energy reduces costs, minimizes environmental impact, and provides a sustainable power source for farming operations.",
       "How can I integrate livestock and crop farming?": "Use livestock manure as fertilizer, rotate grazing with crop fields, and diversify farm income with both crops and livestock.",
       "What are the benefits of community-supported agriculture (CSA)?": "CSA provides a stable income for farmers, fosters community relationships, and ensures fresh produce for members.",
       "How can I manage pests without chemicals?": "Use natural predators, crop rotation, and physical barriers to manage pests without chemicals.",
       "What are the benefits of direct-to-consumer sales?": "Direct sales increase profits, build customer relationships, and provide fresher products to consumers.",
       "How can I create a farm business plan?": "Outline your goals, analyze market opportunities, and create financial projections to develop a comprehensive farm business plan.",
       "What are the advantages of no-till farming?": "No-till farming reduces soil erosion, improves water retention, and enhances soil health.",
       "How can I improve soil drainage?": "Use methods like installing drainage tiles, creating raised beds, and amending soil with organic matter to improve drainage.",
       "What are the best practices for composting?": "Combine green and brown materials, maintain proper moisture levels, and turn the compost regularly for efficient decomposition.",
       "How can I reduce soil compaction?": "Use cover crops, reduce heavy machinery use, and implement controlled traffic farming to minimize soil compaction.",
       "What are the benefits of planting heirloom varieties?": "Heirloom varieties offer unique flavors.",
    };

    for (let key in responses) {
        if (input.toLowerCase().includes(key.toLowerCase())) {
            return responses[key];
        }
    }

    return "I'm sorry, I don't have information on that topic yet.";
}