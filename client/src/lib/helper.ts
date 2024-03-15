export const handleBookingData = (data: any) => {
  return data.map((booking: any) => {
    return {
      id: booking._id,
      source: booking.source,
      destination: booking.destination,
      price: booking.price,
      email: booking.email,
      cabImage: booking.cab.image,
      startTime: new Date(booking.startTime).toLocaleString(undefined, {
        timeZone: "Asia/Kolkata",
      }),
      endTime: new Date(booking.endTime).toLocaleString(undefined, {
        timeZone: "Asia/Kolkata",
      }),
    };
  });
};

export const handleCabData = (data: any) => {
  return data.map((cab: any) => {
    return {
      id: cab._id,
      name: cab.name,
      price: cab.price,
      image: cab.image,
    };
  });
};
