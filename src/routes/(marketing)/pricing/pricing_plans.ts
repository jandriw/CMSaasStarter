export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "mensual",
    name: "Mensual",
    description: "Pensado para aquellos Freelancers que trabajan esporádicamente",
    price: "9€",
    priceIntervalName: "al mes",
    stripe_price_id: "price_1P3WcJP6eTvI1u6lbji4l07d",
    stripe_product_id: "prod_PtJEUIjsw3q1N3",
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "unico",
    name: "Pago único",
    description:
      "Acceso de por vida a la plataforma. ¡Paga sólo una vez y disfruta!",
    price: "99€",
    priceIntervalName: "pago úncio",
    stripe_price_id: "price_1P3WeGP6eTvI1u6lH1OwmHoO",
    stripe_product_id: "prod_PtJGGhubf9H9u8",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
]
