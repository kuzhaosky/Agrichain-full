export default ({ setCreateShipmentModal, allShipmentsdata }) => {
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dateTime;
  };

  console.log(allShipmentsdata);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Tracking System Board
          </h3>
          <p className="text-gray-600 mt-2">
          Welcome to Your Decentralized Tracking Dashboard: Monitor, Analyze  and Manage Your Shipments Efficiently.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <p 
            onClick={() => setCreateShipmentModal(true)}
            className="cursor-pointer inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg md:inline-flex"
          >
            Add Tracking
          </p>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Sender</th>
              <th className="py-3 px-6">Receiver</th>
              <th className="py-3 px-6">Pickup Time</th>
              <th className="py-3 px-6">Co2 footprint</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Delivery Time</th>
              <th className="py-3 px-6">Paid</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {allShipmentsdata?.map((shipment, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.sender ? `${shipment.sender.slice(0, 15)}...` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.receiver ? `${shipment.receiver.slice(0, 15)}...` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {convertTime(shipment.pickupTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.distance * 14} gCO2e
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.price} ETH
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.deliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.isPaid ? "Completed" : "Not Complete"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.status === 0 ? "Pending" : shipment.status === 1 ? "IN_TRANSIT" : "Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 