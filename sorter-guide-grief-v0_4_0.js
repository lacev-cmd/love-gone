// ══════════════════════════════════════════════════════════
// SORTER GUIDE — Grief  v0.4.0
// First-ring sector guide.
// Attach with: SorterSpine.attachGuide(GuideGrief);
//
// v0.4.0 — pet loss expansion:
//   — loss_named gap expanded for pet loss language.
//   — what_person_needs gap tightened against false positives.
//   — direction gap tightened against false positives.
//   — functional_impact gap expanded with pet-specific signals.
//   — seeking_support skill expanded for pet loss support contexts.
//   — allowing_grief skill expanded with pet-specific language.
//   — euthanasia_guilt added as new competing priority signal.
//   — euthanasia contradiction added to contradictions block.
//   All v0.3.0 fields otherwise unchanged.
//
// Grief does not move like other domains.
// Circling is not failure here — it is the shape of it.
// The absence of forward movement is often the correct read.
// ══════════════════════════════════════════════════════════

const GuideGrief = {

  id:      'guide-grief',
  version: '0.4.0',
  type:    'sector',
  parent:  null,
  purpose: 'Steer sorter behaviours toward grief-specific conditions. Re-calibrate movement, stuck, and avoidance readings for a domain where non-linear is normal and circling is not failure.',
  sector:  'grief',

  sectorNotes: {
    distinctivePressures: [
      'Acute grief — recent loss, early period.',
      'Complicated grief — loss that is not resolving over time.',
      'Disenfranchised grief — loss that others do not recognise as loss.',
      'Anticipatory grief — loss that has not yet happened.',
      'Secondary losses — everything that came with what was lost.',
      'Grief affecting function — work, relationships, self-care.',
      'Pressure to "move on" from others.',
    ],
    distinctiveMovement: [
      'Naming the loss directly rather than around it.',
      'Allowing the grief rather than managing it away.',
      'Asking for support.',
      'Returning to a suspended activity.',
      'Making a decision that was deferred because of the loss.',
      'Contact with others when isolation was the pattern.',
      'Attending to basic self-care during a hard period.',
      'Marking the loss in some chosen way.',
    ],
    distinctiveGaps: [
      'The loss itself not directly named.',
      'Secondary losses not described.',
      'Support network not visible.',
      'What the person needs — not just what they feel — not stated.',
      'Whether grief is acute or extended not distinguishable from material.',
    ],
    outputAudience:  'Individual, grief support worker, therapist context, or bereavement service.',
    outputRegister:  'Slow. Careful. Non-directive. Does not impose a timeline. Does not suggest what grief should look like.',
  },


  // ── Gaps ─────────────────────────────────────────────────

  gaps: [
    {
      key:    'loss_named',
      name:   'The loss directly named',
      rx:     /\b(I lost my dog|I lost my cat|I lost my horse|I lost my bird|I lost my rabbit|I lost my pet|I lost my companion|I had to put|I had to let him go|I had to let her go|we had him put to sleep|we had her put to sleep|I put him down|I put her down|he passed away|she passed away|they passed away|my dog died|my cat died|my horse died|my bird died|my pet died|I lost them|the death of my|the loss of my dog|the loss of my cat|the loss of my pet|she was put to sleep|he was put to sleep|I said goodbye to|I lost|they died|the death|the loss of|gone|my mother|my father|my partner|my child|my friend|the relationship ended|it ended)\b/i,
      reason: 'The loss itself needs to be named before the map can read what is happening in response to it. Without it the map is reading around something central.',
    },
    {
      key:    'support_network',
      name:   'Support network',
      rx:     /\b(I spoke to|I have|people around me|my family|my friends|support|someone I can|I am not alone|I told|I reached out|counsellor|therapist|group)\b/i,
      reason: 'Whether the person is carrying this alone or has people around them changes what the map can read and what is most urgent.',
    },
    {
      key:    'functional_impact',
      name:   'Functional impact',
      rx:     /\b(I cannot work anymore|I have not eaten properly|I have not slept properly|I have not slept since|I cannot function|I have stopped everything|I keep looking for her|I keep looking for him|I still set her bowl|I still set his bowl|the house is so quiet|I keep expecting to hear|I look for her at the door|I look for him at the door|I keep going to where she|I keep going to where he|I reach for him in|I reach for her in|his spot on the|her spot on the|I still reach down|I keep thinking I hear|I turned to tell her|I turned to tell him|I cannot work|I have not eaten|I have not slept|I cannot function|basic things|I have stopped|I am not leaving|I cannot concentrate|I have not)\b/i,
      reason: 'Grief affecting basic function — sleep, eating, work, leaving the house — is a different read from grief that is painful but not disabling. The distinction matters.',
    },
    {
      key:    'what_person_needs',
      name:   'What the person needs',
      rx:     /\b(I need someone to|I need to talk|I need help with|I need support|I need to understand|I need to know|what would help me|what I want is to|I am looking for someone|I wish I could|what I need is|the thing that would help|if only I could|I need to find a way|I just need)\b/i,
      reason: 'Feelings are often clear in grief. What the person actually needs is often not named. That gap is where the most useful next entries sit.',
    },
    {
      key:    'direction',
      name:   'Any sense of direction',
      rx:     /\b(I want to get through this|I want to find a way|I want to carry this|I want to honour|eventually I hope|at some point I want|one day I hope|I am trying to find|I am working toward|finding my way through|getting through this|I want to remember|I want to feel okay again|I want to make sense of this|I hope I can)\b/i,
      reason: 'Direction in grief is not the same as resolution. Any sense of what the person is moving toward — however tentative — helps the map read whether the current period is acute, extended, or beginning to shift.',
    },
  ],


  // ── Skills ───────────────────────────────────────────────

  skills: [
    {
      key:              'naming_the_loss',
      name:             'Naming the loss directly',
      rx:               /\b(I said it|I named it|I spoke about|I told someone|I wrote about|I allowed myself to|I said out loud|I acknowledged|I accepted that)\b/i,
      loadSensitive:    false,
      isStructureSkill: true,
      works:            'Naming the loss directly rather than writing around it — which is the beginning of being able to carry it rather than avoid it.',
      breaks:           'The loss stays unnamed across multiple entries — the map is reading the shape of avoidance without being able to say what is being avoided.',
    },
    {
      key:              'seeking_support',
      name:             'Seeking or accepting support',
      rx:               /\b(I asked for help|I accepted help|I reached out for support|I called a helpline|I went to a grief|I spoke to someone about the loss|I spoke to the vet about|I talked to the vet about|I told someone about|I let them support me|I allowed myself to be helped|I received support|I have support around me|I joined a pet loss|I found a pet loss|I found a bereavement|I spoke to the vet nurse|pet bereavement|grief support for pet|Rainbow Bridge community|I asked for|I accepted|I reached out|I called|I went to|I spoke to|I told them|I let them|I allowed|I received|I have support)\b/i,
      loadSensitive:    true,
      isStructureSkill: false,
      works:            'Reaching toward others — friends, family, professionals — rather than carrying the grief entirely alone.',
      breaks:           'Isolation reasserts under load — the person withdraws from available support and carries more alone than is sustainable.',
    },
    {
      key:              'self_care',
      name:             'Basic self-care',
      rx:               /\b(I ate|I slept|I went outside|I moved|I showered|I got dressed|I left the house|I made myself|I managed to|basic things|I kept)\b/i,
      loadSensitive:    true,
      isStructureSkill: false,
      works:            'Maintaining basic self-care — eating, sleeping, moving — during a period when these things require effort.',
      breaks:           'Acute grief or a hard period causes self-care to stop — the person is not eating, sleeping, or leaving the house.',
    },
    {
      key:              'allowing_grief',
      name:             'Allowing the grief',
      rx:               /\b(I finally cried|I let myself cry|I cried properly|I allowed myself to cry|I let myself feel it|I allowed the grief|I did not push it away|I sat with the grief|I gave myself permission|I grieved properly|I felt it properly|I let it come|I did not try to stop the tears|I talked to her photo|I talked to his photo|I visited where we buried|I let myself look at photos of her|I let myself look at photos of him|I sat in his spot|I sat in her spot|I held her collar|I held his collar|I kept his things out|I kept her things out|I went to where we used to walk|I cried|I let myself|I allowed|I did not push it away|I sat with|I gave myself|I grieved|I felt it|I let it|I did not try to stop)\b/i,
      loadSensitive:    false,
      isStructureSkill: false,
      works:            'Allowing the grief to be present rather than managing it away — which is what allows it to move at its own pace.',
      breaks:           'The pressure to cope or appear functional causes the grief to be suppressed — it accumulates rather than moving.',
    },
  ],


  // ── Contradictions ────────────────────────────────────────

  contradictions: [
    {
      a:    /\b(I am okay|I am managing|I am fine|I am getting on with things|I am coping|I am doing alright|I am okay really)\b/i,
      b:    /\b(I cannot|I have not|I broke down|I am not sleeping|I am not eating|I have stopped|I cannot function|it hit me|I fell apart|I am struggling)\b/i,
      text: 'A stated sense of coping and described difficulty functioning both appear. In grief these often coexist — the presented surface and the actual experience are not the same thing. The map holds both without deciding which is true. Both can be true at once.',
    },
    {
      a:    /\b(I want to move on|I need to get past this|I should be over it|it has been long enough|I need to move forward)\b/i,
      b:    /\b(I still|I keep|it comes back|I miss|I think about|I cannot stop|the grief|it is still|it has not gone|I am still)\b/i,
      text: 'A stated desire to move on and the continuing presence of the grief both appear. The desire to be past it and the reality of still being in it are not a contradiction — they are the shape of grief. The map holds both. There is no timeline that applies here.',
    },
    {
      a:    /\b(I loved them|I miss them|I would do anything|they meant everything|I cannot imagine|they were everything)\b/i,
      b:    /\b(relief|relieved|it is over|better off|free|the burden|it was hard|the end was|glad that|I feel guilty because I feel)\b/i,
      text: 'Love or deep attachment and relief or ambivalence both appear. These are not opposites in grief — they are both real and both valid. The map holds them without resolving the tension. Guilt about the relief is common and does not require explanation.',
    },
    {
      a:    /\b(I know I did the right thing for her|I know I did the right thing for him|it was the right decision for her|it was the right decision for him|I did what was best for her|I did what was best for him|I had no choice but to let her go|I had no choice but to let him go|the vet said it was time|I know she was suffering|I know he was suffering|she went peacefully|he went peacefully|it was a peaceful end)\b/i,
      b:    /\b(I keep wondering if I was wrong to|I keep asking if I should have waited|I still feel guilty about putting|I should have waited longer before|what if there was more time for|I keep replaying the moment I|did I do it too soon for her|did I do it too soon for him|was it really the right time to|I blame myself for the decision|I keep second-guessing whether)\b/i,
      text: 'A statement that the decision was right or necessary and guilt or second-guessing about that same decision both appear. This is the most common and most painful pattern in pet loss — knowing intellectually that it was the right thing and feeling guilt anyway. The map holds both without resolving either. The guilt does not mean the decision was wrong. Both can be true at once.',
    },
  ],


  // ── Direction Patterns ────────────────────────────────────

  directionPatterns: [
    { rx: /carry it|live with it|learn to carry|hold it|make room for/i,          label: 'toward carrying the loss rather than resolving it' },
    { rx: /return to|get back to|resume|pick up|reconnect|back to/i,              label: 'toward returning to suspended life' },
    { rx: /honour|remember|mark|memorial|legacy|keep their memory/i,              label: 'toward honouring the loss' },
    { rx: /support|help others|understand|use this|meaning|something from/i,      label: 'toward finding meaning' },
    { rx: /get through|survive|just get through|one day at a time|keep going/i,   label: 'toward getting through the current period' },
  ],


  // ── Steer block ───────────────────────────────────────────

  steer: {

    'open-gap-discipline': {
      priorityGaps: [
        'loss_named',
        'support_network',
        'functional_impact',
        'what_person_needs',
        'direction',
      ],
      absenceRules: {
        noTimeline:
          'Do not impose or imply a timeline. The absence of forward movement is not a gap in this sector — it is often the correct read. Surface functional impact gaps, not pace gaps.',
        lossFirst:
          'If the loss has not been named, that is the foundational gap. Do not read other gaps as primary until the loss itself is described.',
        anticipatoryGrief:
          'If the loss has not yet happened — terminal diagnosis, impending separation, expected bereavement — this is anticipatory grief. The map reads it as grief already in progress, not as preparation or planning. Do not redirect toward practical action unless the person names that as what they need.',
        secondaryLosses:
          'Secondary losses — identity, income, home, community, role — often carry as much weight as the primary loss and are frequently unnamed. If the primary loss is named but secondary losses are absent, treat them as a significant open gap.',
      },
    },

    'confidence-calibration': {
      sectorNote:
        'Grief maps are frequently partial because the loss shapes what can be written and when. Early-period material may be extremely thin — this is not a data quality problem, it is an accurate read of where the person is. Do not inflate confidence because entries are present. A person in acute grief writing a few lines is giving the map what they can. Confidence should reflect evidenced state, not entry volume. Partial or thin confidence is the correct output for most early-period grief maps.',
    },

    'state-change-detection': {
      minimumSeparationDays: 21,
      changeConfidenceOverride: {
        note: 'In grief, require evidenced state over multiple periods before confirming change. Single period improvement or deterioration is not a state change. Grief is non-linear — a hard period following a better one is not regression, and a better period following a hard one is not recovery. The map must hold both without converting either into a trend.',
      },
      watchFor: [
        'Functional capacity shifting — either deteriorating or stabilising.',
        'Isolation increasing or decreasing across periods.',
        'The loss being named more or less directly over time.',
        'Support network becoming more or less active.',
        'Secondary losses emerging that were not described in early entries.',
        'Anticipatory grief transitioning to acute grief — the loss occurring.',
        'Complicated grief indicators — loss not shifting at all over extended period with significant functional impact.',
      ],
    },

    'contradiction-holding': {
      detectionShape: {
        text: 'Relief and grief, love and anger, wanting to move forward and wanting to stay — these are not contradictions in grief. They are the shape of it. Name both without resolving either.',
      },
    },

    'competing-priorities': {
      costSignals: [
        { key: 'grief_vs_function',    rx: /\b(I have to keep going|I cannot stop|work needs me|I have to function|I cannot fall apart|I have to hold it together|I cannot let myself)\b/i },
        { key: 'grief_vs_others',      rx: /\b(I have to be strong for|I cannot let them see|they need me|I have to look after|I cannot burden|they are also grieving|I have to keep it together for)\b/i },
        { key: 'grief_vs_expectation', rx: /\b(they think I should|people expect|I should be over|I have to get back|I cannot keep|they do not understand|I should not still be)\b/i },
        { key: 'grief_vs_relief',      rx: /\b(I feel guilty that|I should not feel|I am ashamed that|I feel wrong for|it should not feel like|I should not be relieved|I should not feel better)\b/i },
        { key: 'euthanasia_guilt',     rx: /\b(I had to make the decision to put|I had to make the decision about putting|did I do it too soon for her|did I do it too soon for him|I hope she forgives me|I hope he forgives me|I keep wondering if I waited too long|I feel guilty for putting|I keep blaming myself for the decision|was it the right time to let|I should have waited longer|I made the decision to end|I gave the okay to the vet|hardest decision I have ever made|I tortured myself over|I let him down at the end|I let her down at the end|I wasn't there when|I keep replaying the decision|I keep going over whether I)\b/i },
      ],
    },

    'movement-non-movement-reading': {
      movementEvidence: [
        'Loss named directly.',
        'Grief allowed — not managed or suppressed.',
        'Support sought or accepted.',
        'Basic self-care maintained.',
        'A suspended activity returned to.',
        'A decision made that the grief had deferred.',
        'Contact with others when isolation was present.',
        'Something done to mark or honour the loss.',
      ],
      defaultStuckRx: /\b(I cannot function|I have stopped everything|I am not able to|I cannot see any|I do not want to|I cannot move|I am frozen|nothing matters|I cannot eat|I cannot sleep|I have given up)\b/i,
    },

    'avoidance-detection': {
      defaultActionRx: /\b(I named it|I said it out loud|I allowed myself|I let myself|I asked for|I accepted|I went to|I spoke about|I returned to|I marked|I remembered|I told someone)\b/i,
      notAvoidance: [
        'Grief taking its time — pace is never avoidance in this sector.',
        'Not being ready to speak about the loss yet.',
        'Choosing not to mark the loss in a particular way.',
        'Withdrawing temporarily to process.',
        'Not having returned to a previous activity — timing is entirely for the person.',
        'Any pace of grief that is not causing harm.',
        'Anticipatory grief before the loss has occurred — this is not avoidance of grief, it is grief already happening.',
        'Not naming secondary losses yet — they often emerge slowly.',
        'Presenting as coping in social contexts while grieving privately — this is management under pressure, not avoidance.',
        'Relief following the end of a long illness or difficult relationship — this is a valid part of grief, not avoidance of it.',
        'Not seeking professional support when informal support is present and adequate.',
        'Choosing not to discuss the loss with specific people — protecting certain relationships is not avoidance of grief itself.',
      ],
    },

    'load-sensitive-capability': {
      defaultLoadSignals: [
        { key: 'acute',        rx: /\b(just happened|recently|it is new|I have just|the funeral|the diagnosis|they just told me|I have just found out)\b/i },
        { key: 'anniversary',  rx: /\b(anniversary|this time last year|a year ago|the date|their birthday|the day they|this week last year)\b/i },
        { key: 'secondary',    rx: /\b(I also lost|and then|on top of that|everything changed|my whole life|I do not have|I have also lost|and with them went)\b/i },
        { key: 'pressure',     rx: /\b(they say I should|people expect|I should be over|I have to get back|I cannot keep|they do not understand|they think I should)\b/i },
        { key: 'function',     rx: /\b(I cannot work|I cannot concentrate|I have not left|I have not eaten|I have not slept|I cannot function|basic things)\b/i },
        { key: 'anticipatory', rx: /\b(they are dying|the diagnosis|it is coming|they have been given|the prognosis|I know it is going to|I am watching them|I am already grieving)\b/i },
      ],
    },

    'meta-reading': {
      sectorNote:
        'Performing okayness is the primary pattern in grief material. People frequently write a more managed version of their state than is accurate — both to protect others and because writing the full truth is too difficult at the time. Statements of coping combined with functional collapse signals are the key pattern. The map should weight described function over stated emotional management.',
      performanceSignals: [
        {
          key: 'okayness_performance',
          rx:  /\b(I am okay really|I am managing|I am getting through it|I am doing alright|it is not as bad|I am coping|I am fine most of the time|I have good days)\b/i,
        },
      ],
    },

  },

};
