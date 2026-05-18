import AllianceMarketMenu from "./AllianceMarketMenu";

export default function AllianceMarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AllianceMarketMenu />
      {children}
    </>
  );
}
