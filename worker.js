// Cloudflare Worker for Singh Bot (free tier)
// 1) Create a new Worker and paste this code
// 2) Set an environment variable: OPENAI_API_KEY (or use OpenRouter: OPENROUTER_API_KEY + endpoint)
// 3) Update window.AI_PROXY_URL in ai-config.js with your deployed Worker URL

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response('Only POST', { status: 405 });
    const { prompt } = await request.json();
    if (!prompt) return new Response(JSON.stringify({ reply: 'Ask me something about Samjot\'s skills or experience.' }), { headers: { 'content-type': 'application/json' } });

    // Choose provider: OpenAI (gpt-3.5/4o-mini) or OpenRouter
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = env.OPENAI_API_KEY;

    const system = `You are Singh Bot, a helpful assistant answering only about the portfolio owner Samjot Singh. Keep responses concise, friendly, and specific to skills/experience. If asked for unrelated topics, guide back to portfolio.`;

    const body = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5,
      max_tokens: 300
    };

    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      return new Response(JSON.stringify({ reply: 'Sorry, the AI service is unavailable.' }), { headers: { 'content-type': 'application/json' }, status: 200 });
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || 'Thanks for asking!';
    return new Response(JSON.stringify({ reply }), { headers: { 'content-type': 'application/json' } });
  }
};


