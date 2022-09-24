export function getDonateURL(service_name: string) {
  const params = new URLSearchParams();
  params.set("service_name", service_name);
  return `https://tips.appsteak.com/tip?${params.toString()}`;
}
