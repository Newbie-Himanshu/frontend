import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="font-serif text-4xl font-semibold text-[#2C1810]"
      >
        Your Basket is Empty
      </Heading>
      <Text className="text-[#8D6E63] text-base max-w-md mx-auto leading-relaxed">
        Let&apos;s discover some beautiful handcrafted pieces. Explore our artisan collections to find something special.
      </Text>
      <div className="pt-4">
        <InteractiveLink href="/store">Explore the Shop</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
