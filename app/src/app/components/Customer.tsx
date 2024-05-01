import Image from 'next/image';
import { getCustomers, getCustomer } from '@/sanity/sanity.query';
import { CustomerPageType, CustomerType } from '@/types';

export default async function Customer() {
  const customerData: CustomerPageType[] = await getCustomer();
  const customersData: CustomerType[] = await getCustomers();

  return (
    <>
      {customerData.map((data) => (
        <section key={data?._id}>
          <div className="mb-8 flex flex-col gap-4 lg:mb-12 lg:gap-6">
            <h1 className="text-36 lg:text-60 leading-120 w-full font-medium tracking-tight lg:w-4/5">
              {data?.title}
            </h1>
            <p className="text-18 lg:text-20 w-full lg:w-1/2">
              {data?.description}
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            {customersData.map((customer) => (
              <article
                key={customer?._id}
                className="flex h-full w-full flex-col gap-4 xl:h-[200px] xl:flex-row"
              >
                <div className="h-[200px] w-full overflow-hidden md:h-[276px] xl:h-[230px]">
                  <Image
                    alt={customer?.image.alt}
                    src={customer?.image.image}
                    width={320}
                    height={200}
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h2 className="text-18 w-[90%] font-semibold">
                    {customer?.name}
                  </h2>
                  <p className="text-main-grey">{customer?.preamble}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
