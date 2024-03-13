export const htmlTemplate = (
  source: string,
  destination: string,
  startTime: string,
  endTime: string,
  price: number
) => `
<main
style="font-family: Arial, sans-serif;
max-width: 600px;
margin: 0 auto;
padding: 20px;
background-color: #f5f5f5;"
>
<h1 style="color: #4a86e8;">Booking Confirmation</h1>
<div style="margin-bottom: 20px;">
  <h2 style="color: #262626;">Pickup</h2>
  <p style="color: #4a4a4a;">${source}</p>
</div>
<div style="margin-bottom: 20px;">
  <h2>Drop-off</h2>
  <p style="color: #4a4a4a;">${destination}</p>
</div>

<div style="margin-bottom: 20px;">
  <h2 style="color: #262626;">Begins At</h2>
  <p style="color: #4a4a4a;">${startTime}</p>
</div>

<div style="margin-bottom: 20px;">
  <h2 style="color: #262626;">Ends At</h2>
  <p style="color: #4a4a4a;">${endTime}</p>
</div>

<div style="margin-bottom: 20px;">
  <h2 style="color: #262626;">Total Cost</h2>
  <p style="color: #4a4a4a;">${price}</p>
</div>
</main>
`;
