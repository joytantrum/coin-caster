
const userData = require('/Users/lindsayclifford/Desktop/REACT-APPS/COIN-CAST/root/back-end/models/user.js');

const fetchUsers = async (req, res) => {
    try {
        // Find all the Users
        const userdatas = await userData.find();
        // Respond with Users data 
        res.json({ userdatas: userdatas });
    } catch (error) {
        // Handle database query error
        console.error("Error fetching user profiles:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Fetch a single User from ID
const fetchUser = async (req, res) => {
    // Get ID off the url 
    const userID = req.params.id;
    // Find the note using id 
    const userdata = await userData.findById(userID)
    // Respond w/ User data 
    res.json({ userdata : userdata })
}

// Create the User profile (post creates, accepts info through req body)
const createUser = async (req, res) => {
    // Get the sent in data off req body 
    const name = req.body.name;
    const email = req.body.email; 
    const password = req.body.password;
    const monthly_income = req.body.monthly_income; 
    const init_savings_balance = req.body.init_savings_balance;

    // Create a User profile
    const userdata  = await userData.create({
        name: name,
        email: email,
        password: password, 
        monthly_income: monthly_income,
        init_savings_balance: init_savings_balance, 
    });
    // Respond w/ new User profile 
    res.json({ userdata  : userdata  })
}

// Fetch and update a User's profile  
const updateUser = async (req, res) => {
    //  Get the ID off the url
    const userID = req.params.id;
    // Get the data off the req body 
    const name = req.body.name;
    const email = req.body.email; 
    const password = req.body.password;
    const monthly_income = req.body.monthly_income; 
    const init_savings_balance = req.body.init_savings_balance;
    // Find and update the record
    await userData.findByIdAndUpdate(userID, {
        name: name,
        email: email,
        password: password, 
        monthly_income: monthly_income,
        init_savings_balance: init_savings_balance, 
    })
    // Find updated User profile 
    const userdata  = await userData.findById(userID)
    // Respond 
    res.json({ userdata  : userdata  })
}

// Delete a User
const deleteUser =  async (req, res) => {
    // Get ID off url 
    const userID = req.params.id;
    // Delete the User 
    await userData.deleteOne({id : userID});
    // Respond 
    res.json({ success: "User profile deleted"});
}

module.exports = {
    fetchUsers : fetchUsers, 
    fetchUser : fetchUser, 
    createUser : createUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}