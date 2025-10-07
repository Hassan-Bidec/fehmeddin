// import { create } from "zustand";
// import { categoriesApi } from "@/lib/api/category";

// const useCategoryStore = create((set) => ({
//     categories: [],
//     fetchCategories: async () => {
//         try {
//             const res = await categoriesApi.getCategories();
//             if (res?.data) {
//                 const formatted = res.data
//                     .map((cat) => ({
//                         id: cat.id,
//                         name: cat.name,
//                         slug: cat.slug,          // ✅ slug bhi store kar liya

//                         href: `/${cat.slug}`,
//                         subcategories: cat.subcategories || [], // ✅ subcategories bhi rakhi

//                     }))
//                     .reverse();

//                 // static "ای میگزین" ko add kar diya
//               set({
//           categories: [{ id: 18, name: "ای میگزین", slug: "magazine", href: "/magazine", subcategories: [] }, ...formatted],
//         });
//             }
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//         }
//     },
//       getCategoryBySlug: (slug) => {
//     const { categories } = get();
//     return categories.find((cat) => cat.slug === slug);
//   },
// }));

// export default useCategoryStore;
import { create } from "zustand";
import { categoriesApi } from "@/lib/api/category";

const useCategoryStore = create((set, get) => ({
  categories: [],

  fetchCategories: async () => {
    try {
      const res = await categoriesApi.getCategories();
      if (res?.data) {
        const formatted = res.data
          .map((cat) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            href: `/${cat.slug}`,
            subcategories: cat.subcategories || [],
          }))
          .reverse();

        set({
          categories: [
            { id: 18, name: "ای میگزین", slug: "magazine", href: "/magazine", subcategories: [] },
            ...formatted,
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  getCategoryBySlug: (slug) => {
    console.log('slu',slug)
    const categories = get().categories;
    console.log('cate',categories)
    const category = categories.find((cat) => cat.slug == slug);
    return category
  },
}));

export default useCategoryStore;
