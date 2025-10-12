export const formatPrice = (
  price: number | string,
  options: {
    locale?: string;
    currency?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {}
): string => {
  const {
    locale = "pt-BR",
    currency = "BRL",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    console.error("Invalid price provided:", price);
    return "R$0.00";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numericPrice);
};
