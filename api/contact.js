export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method === 'POST') {
        try {
            // Destructure the exact fields sent from your updated contact.html
            const { purpose, service, name, company, email, phone, message } = req.body;
            
            // Replicate your Express console logs
            console.log("New Submission from:", name);
            console.log("They want to:", purpose);
            console.log("Service:", service);
            console.log("Company:", company);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Message:", message);
            
            // Here you would use Nodemailer or Resend to email yourself, 
            // or insert the data into a database like Vercel Postgres/MongoDB.
            
            // Tell the frontend the submission was successful so it can redirect
            return res.status(200).json({ success: true });

        } catch (error) {
            console.error("Server error:", error);
            return res.status(500).json({ success: false, error: "Server error" });
        }
    } else {
        // Reject GET requests
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
