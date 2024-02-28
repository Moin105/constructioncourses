import { Button, Card, Label, TextInput, Select } from "flowbite-react";
import { card } from "../../assets";
import Image from "next/image";

const PaymentCard = () => {
  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const monthNumber = index + 1;
    return (
      <option key={monthNumber} value={monthNumber}>
        {monthNumber < 10 ? `0${monthNumber}` : monthNumber}
      </option>
    );
  });

  const currentYear = new Date().getFullYear();
  const nextTenYears = Array.from({ length: 10 }, (_, index) => {
    const year = currentYear + index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <Card className="w-3/5 h-full p-6 bg-white shadow-md rounded-xl">
      <form className="flex flex-col gap-4">
        <Image
          priority
          src={card}
          alt="card"
          className="object-cover rounded-3xl"
        />
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="cardNumber"
            value="Card Number"
            className="text-[10px] sm:text-sm"
          />
          <TextInput
            id="cardNumber"
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="cardHolderName"
            value="Card Holder Name"
            className="text-[10px] sm:text-sm"
          />
          <TextInput
            id="cardHolderName"
            type="text"
            placeholder="Susan Doe"
            required
          />
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="expirationMonth"
              value="Expiration Month"
              className="text-[10px] sm:text-sm"
            />
            <Select id="expirationMonth" required>
              <option value="">Select Month</option>
              {monthOptions}
            </Select>
          </div>
          <Select id="expirationYear" required>
            <option value="">Select Year</option>
            {nextTenYears}
          </Select>
          <div className="flex flex-col gap-1 max-w-[150px]">
            <Label
              htmlFor="cvv"
              value="CVV (Security Code)"
              className="text-[10px] sm:text-sm"
            />
            <TextInput id="cvv" type="number" required />
          </div>
        </div>
        <Button type="submit" className="mt-4">
          Confirm
        </Button>
      </form>
    </Card>
  );
};

export default PaymentCard;
