import supabase from "../../utils/supabase"

export const getCategoryAction = (category) => ({
    type: "GET_CATEGORY",
    category
})

export const categoryAddAction = async (category) => {
    const { data, error } = await supabase.from('category').insert(category);
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/category')

    }

    console.log(category)
};

export const editCategory = async (id, update) => {
    const { data, error } = await supabase.from('category').update(update).eq("id", id).select();
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/category')

    }
}

export const categoryDeleteAction = async (id) => {
    const { data, error } = await supabase.from('category').delete().eq('id', id);
    if (error) {
        console.log(error)

    } else {
        console.log(data);
        window.location.assign('/dashboard/category')

    }
}

