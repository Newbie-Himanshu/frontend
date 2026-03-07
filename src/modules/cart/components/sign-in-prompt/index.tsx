import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Heading level="h2" className="text-xl font-bold text-[#2C1810]">
          Already have an account?
        </Heading>
        <Text className="text-sm font-medium text-[#8D6E63] mt-1">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button 
            className="h-10 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105"
            style={{ 
              background: "transparent", 
              border: "1.5px solid #C9762B",
              color: "#C9762B",
            }}
            data-testid="sign-in-button"
          >
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
