export const handleBookingData = (data: any) => {
  return data.map((booking: any) => {
    return {
      id: booking._id,
      source: booking.source,
      destination: booking.destination,
      price: booking.price,
      email: booking.email,
      cabImage: booking.cab.image,
      startTime: new Date(booking.startTime).toLocaleString(),
      endTime: new Date(booking.endTime).toLocaleString(),
    };
  });
};
