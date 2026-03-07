import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-6 flex items-center border-b border-ui-border-base mb-4" style={{ borderColor: "#E8DDD4" }}>
        <Heading className="font-serif text-3xl font-semibold text-[#2C1810]">
          Your Basket
        </Heading>
      </div>
      <table className="w-full border-collapse">
        <thead className="border-b border-[#E8DDD4]">
          <tr className="text-xs font-bold tracking-[0.1em] uppercase text-[#C9762B]">
            <th className="text-left pb-4 pl-0 pr-4 font-bold">ITEM</th>
            <th className="text-left pb-4 px-4 font-bold">QUANTITY</th>
            <th className="hidden small:table-cell text-left pb-4 px-4 font-bold">
              PRICE
            </th>
            <th className="text-right pb-4 pl-4 pr-0 font-bold">
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </tbody>
      </table>
    </div>
  )
}

export default ItemsTemplate
