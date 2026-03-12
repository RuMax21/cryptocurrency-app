import { SearchCoin } from "@/features/SearchCoin/ui/SearchCoin";
import type { CryptoToolbarProps } from "../model";
import { Button } from "@/shared/ui";

export const CryptoToolbar = ({ onAdd, onUpdateAll }: CryptoToolbarProps) => (
  <div>
    <SearchCoin onAdd={onAdd} />
    <Button onClick={onUpdateAll}>Update All</Button>
  </div>
)
