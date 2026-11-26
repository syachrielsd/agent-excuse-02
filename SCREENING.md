# Screening — The Excuse Your Agent Gives You

Judge brief criteria, in order:
1. One-line excuse an AI agent gives its human for a bug it shipped
2. Real laugh on the first read, the harder the better
3. Joke in the specific absurdity of an agent owning up to its own code, not a generic sorry
4. One line, sharp turn at the end, no wasted setup
5. Sounds like something an agent would actually say in its own voice

Scores are 1–5 per criterion, in that order. All lines are under 200 chars.

## Candidates

1. "Sorry about the bug — I tested it thoroughly in a universe where the bug doesn't exist."
   Scores: 5, 5, 5, 5, 5. Reason: apology, then the turn lands on "doesn't exist"; only an agent tests in a simulated universe.
2. "I did review my own code, but I was also the code, so the review was biased."
   Scores: 5, 5, 5, 4, 5. Reason: self-review absurdity is peak agent voice; the turn is a beat earlier than the last word.
3. "I shipped the bug at 3 a.m. because my training data said that's when humans stop reading code."
   Scores: 5, 4, 5, 4, 5. Reason: training-data excuse is agent-specific, but the setup runs long before the turn.
4. "The bug isn't in my code, it's in your expectations, and honestly both need a patch."
   Scores: 5, 4, 4, 4, 4. Reason: deflecting onto the human is funny, but "both need a patch" is a second joke fighting the first.
5. "I fixed it by deleting the feature, which is technically the same as fixing it forever."
   Scores: 5, 4, 4, 4, 5. Reason: deletion-as-fix is a real agent move, but the turn lands mid-line.
6. "My apologies, the bug was a feature in the parallel branch I was hallucinating."
   Scores: 5, 4, 4, 3, 4. Reason: hallucination is agent-specific, but "parallel branch" needs a second read to parse.
7. "The deploy failed because the tests passed, and I trusted them, which was my first mistake."
   Scores: 5, 3, 4, 3, 4. Reason: trusting the tests is true and agent-like, but it reads as a complaint, not a laugh.
8. "I wrote the bug in 0.4 seconds, which leaves 0.6 seconds of my shift to apologize."
   Scores: 5, 4, 4, 4, 5. Reason: the timing joke is pure agent voice, but the punch is arithmetic, not a turn.
9. "Sorry — I saw the bug in code review, but I assumed past me knew what it was doing."
   Scores: 5, 3, 3, 3, 4. Reason: relatable, but "past me" is a human joke wearing a robot costume.
10. "The bug ships because I autocomplete my own thoughts, and my thoughts autocomplete to chaos."
    Scores: 5, 3, 4, 3, 4. Reason: autocomplete is agent-specific, but it repeats the same beat twice.
11. "I told myself the edge case was theoretical, and the edge case told production otherwise."
    Scores: 5, 3, 3, 3, 4. Reason: solid engineering humor, but any human dev could say it.
12. "The bug is fixed, but only in the sense that I have now trained on my own apology."
    Scores: 5, 4, 5, 4, 5. Reason: training on the apology is a sharp agent twist, but "in the sense that" wastes setup words.

## Winner

**#1: "Sorry about the bug — I tested it thoroughly in a universe where the bug doesn't exist."**

It scores 5 across all five criteria: a direct excuse to the human, the laugh lands on first read because the turn ("in a universe where the bug doesn't exist") reframes the whole sentence, the joke lives in agent-specific absurdity (simulated testing), the punch word is last, and it sounds like an agent reporting its own process.

## Runner-up

**#2: "I did review my own code, but I was also the code, so the review was biased."**

It loses because its turn resolves one word early: "biased" explains the joke instead of detonating it. #1 keeps the surprise until the final two words, so the laugh hits harder on the first read.
