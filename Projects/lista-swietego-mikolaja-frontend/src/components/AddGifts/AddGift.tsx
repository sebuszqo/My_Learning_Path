import {FormEvent, useState} from "react";
import {CreateGiftRequest, GiftEntity} from "types";
import {Spinner} from "../../common/Spinner/Spinner";

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftRequest>({count: 1, name: ""})
    const [loading, setLoading] = useState<boolean>(false)
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const sendForm = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setLoading(true)
            const response = await fetch("http://localhost:3001/gift", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            })
            const data: GiftEntity = await response.json()
            setLoading(false);
            setResultInfo(`${data.name} added with ID ${data.id}`)
        } catch (e) {
            setLoading(false)
            setResultInfo(`Sorry, there was a problem with your data`)
        } finally {
            setLoading(false)
        }


    }
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <Spinner/>
    }
    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>
    }

    return <form onSubmit={sendForm}>
        <h2>Add gift </h2>

        <p><label>
            Name: <br/>
            <input
                type="text"
                value={form.name}
                onChange={e => updateForm('name', e.target.value)}/>
        </label>
        </p>
        <p>
            <label>
                Count: <br/>
                <input
                    type="text"
                    value={form.count}
                    onChange={e => updateForm('count', Number(e.target.value))}
                    min={1}
                />
            </label>
        </p>
        <button type={"submit"}>Add new Gift</button>
    </form>
};