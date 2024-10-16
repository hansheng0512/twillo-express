import express, {NextFunction, Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const from = '+19103860128';
const to = '+60175077820';

const accountSid = 'xx';
const authToken = 'xx';

app.get('/whatsapp', async (req: Request, res: Response, next: NextFunction) => {

    const client = require('twilio')(accountSid, authToken);

    try {
        const response = await client.messages.create({
            body: 'hello from arkmind',
            from: `whatsapp:${from}`,
            to: `whatsapp:${to}`,
        });
        res.send(`Whatsapp sent to ${to}: ${response.sid}`);
        console.log();
    } catch (error) {
        next(`Failed to send Whatsapp: ${error}`);
    }
});

app.get('/sms', async (req: Request, res: Response, next: NextFunction) => {

    const client = require('twilio')(accountSid, authToken);

    try {
        const response = await client.messages.create({
            body: 'hello from arkmind',
            from: `${from}`,
            to: `${to}`,
        });
        res.send(`SMS sent to ${to}: ${response.sid}`);
        console.log();
    } catch (error) {
        next(`Failed to send SMS: ${error}`);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
