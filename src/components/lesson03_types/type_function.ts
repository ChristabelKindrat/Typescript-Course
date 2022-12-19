export enum Status {
    Published = "published",
    Draft = "draft",
    Deleted = "delete",
}

const req = {
    topicId: 5,
    status: Status.Published
}

const res =
    [
        {
            question: "Как осуществляется доставка?",
            answer: "быстро!",
            tags: ["popular", "new"],
            likes: 3,
            status: "published"
        }
    ]

async function getFaqs(req: {
    topicId: number,
    status?: Status
}): Promise<{
    questions: string,
    answer: string,
    tags: [string, string],
    likes: number,
    status: Status.Published}[]>
{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}

getFaqs(req)