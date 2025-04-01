import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo({ handleChange }) {
  const categories = [
    { value: "AllProduct", label: "All Product" },
    { value: "beauty", label: "Beauty" },
    { value: "fragrances", label: "Fragrances" },
    { value: "furniture", label: "Furniture" },
    { value: "groceries", label: "Groceries" },
    { value: "home-decoration", label: "Home Decoration" },
    { value: "kitchen-accessories", label: "Kitchen Accessories" },
    { value: "laptops", label: "Laptops" },
    { value: "mens-shirts", label: "Men's Shirts" },
    { value: "mens-shoes", label: "Men's Shoes" },
    { value: "mens-watches", label: "Men's Watches" },
    { value: "mobile-accessories", label: "Mobile Accessories" },
    { value: "motorcycle", label: "Motorcycle" },
    { value: "skin-care", label: "Skin Care" },
    { value: "smartphones", label: "Smartphones" },
    { value: "sports-accessories", label: "Sports Accessories" },
    { value: "sunglasses", label: "Sunglasses" },
    { value: "tablets", label: "Tablets" },
    { value: "tops", label: "Tops" },
    { value: "vehicle", label: "Vehicle" },
    { value: "womens-bags", label: "Women's Bags" },
    { value: "womens-dresses", label: "Women's Dresses" },
    { value: "womens-jewellery", label: "Women's Jewellery" },
    { value: "womens-shoes", label: "Women's Shoes" },
    { value: "womens-watches", label: "Women's Watches" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="button" size="sm">Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category) => (
            <DropdownMenuItem
              key={category.value}
              onClick={() => handleChange(category.value)}
            >
              {category.label}
              <DropdownMenuSeparator />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
