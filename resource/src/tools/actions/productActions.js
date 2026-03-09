import supabase from "../../utils/supabase"

export const getProductAction = (product) => ({
    type: "GET_PRODUCT",
    product
})

export const productAddAction = async (product) => {
    const { data, error } = await supabase.from('product').insert(product);
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/product')

    }

    console.log(product)
};

export const editProduct = async (id, update) => {
    const { data, error } = await supabase.from('product').update(update).eq("id", id).select();
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/product')

    }
}

export const deleteProduct = async (id) => {
    const { data, error } = await supabase.from('product').delete().eq('id', id);
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/product')

    }
}

