// Test01 workspace data with specified participants and channels
const test01Data = {
  // Workspace data
  workspace: {
    id: '3',
    name: 'Test01',
    memberCount: 7,
    avatar: '🧪',
    isOwner: true,
    slug: 'test01',
    url: 'test01.slack.com'
  },
  
  // Channels for Test01 workspace
  channels: [
    { id: 'general', name: 'general', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'general-test', name: 'general-test', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'tech', name: 'tech', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'mock', name: 'mock', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'team', name: 'team', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'secret', name: 'secret', isPrivate: true, unreadCount: 0, createdAt: new Date().toISOString() },
    { id: 'misogiai', name: 'misogiAI', isPrivate: false, unreadCount: 0, createdAt: new Date().toISOString() }
  ],
  
  // Participants for Test01 workspace
  participants: [
    { id: 'nikith', name: 'Nikith', presence: 'active', avatar: 'NK', email: 'nikith@test01.com', status: { text: 'Coding', emoji: '💻' } },
    { id: 'nani', name: 'Nani', presence: 'dnd', avatar: 'NA', email: 'nani@test01.com', status: { text: 'In a meeting', emoji: '📊' } },
    { id: 'sai', name: 'Sai', presence: 'active', avatar: 'SA', email: 'sai@test01.com', status: { text: 'Designing', emoji: '🎨' } },
    { id: 'jyosh', name: 'Jyosh', presence: 'away', avatar: 'JY', email: 'jyosh@test01.com', status: { text: 'Exploring', emoji: '🔍' } },
    { id: 'admin', name: 'Admin', presence: 'active', avatar: 'AD', email: 'admin@test01.com', status: { text: 'Managing the team', emoji: '👨‍💼' } },
    { id: 'test_acc', name: 'Test Account', presence: 'active', avatar: 'TA', email: 'test@test01.com', status: { text: 'Testing', emoji: '🔧' } }
  ]
};

// Function to initialize the Test01 workspace data in localStorage
export const initializeTest01Workspace = () => {
  try {
    // Store channels for Test01 workspace
    localStorage.setItem('channels_3', JSON.stringify(test01Data.channels));
    
    // Check if user_workspaces exists in localStorage
    const existingWorkspaces = localStorage.getItem('user_workspaces');
    if (existingWorkspaces) {
      const workspaces = JSON.parse(existingWorkspaces);
      
      // Check if Test01 workspace already exists
      const exists = workspaces.some(workspace => workspace.id === '3');
      
      if (!exists) {
        // Add Test01 workspace to existing workspaces
        workspaces.push(test01Data.workspace);
        localStorage.setItem('user_workspaces', JSON.stringify(workspaces));
      }
    } else {
      // Create new workspaces array with Test01
      localStorage.setItem('user_workspaces', JSON.stringify([test01Data.workspace]));
    }
    
    // Initialize messages for each channel
    const initialMessages = {};
    test01Data.channels.forEach(channel => {
      initialMessages[channel.id] = [];
    });
    
    // Add mock messages for Tech channel with Windsurf, CURSOR, TRAE discussions
    // Conversation between Sai, Admin, Nani, and Nikith with images and links
    const techMessages = [
      {
        id: `msg-${Date.now()}-1`,
        channelId: 'tech',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: 'Hey team, I just tried out the new Windsurf AI platform. The agent capabilities are incredible! Check out this screenshot of it in action: ![Windsurf AI](https://i.imgur.com/JKYzDgd.png) and their website: https://windsurf.ai',
        timestamp: new Date(Date.now() - 3600000 * 48), // 2 days ago
        reactions: [{ emoji: '🔥', users: ['sai', 'admin', 'nani'], count: 3 }],
        replies: [
          {
            id: `reply-${Date.now()}-1`,
            channelId: 'tech',
            userId: 'sai',
            username: 'Sai',
            avatar: 'SA',
            content: "That looks amazing! I'll definitely check it out. Have you tried the multi-agent feature?",
            timestamp: new Date(Date.now() - 3590000 * 48), // 2 days ago
            reactions: [],
            replies: [],
            replyCount: 0,
            threadParticipants: []
          }
        ],
        replyCount: 1,
        threadParticipants: ['sai']
      },
      {
        id: `msg-${Date.now()}-2`,
        channelId: 'tech',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "Windsurf looks promising! Have you compared it with CURSOR yet? I've been using CURSOR for a while and it's been a game-changer for coding. Here's a screenshot of my CURSOR setup: ![CURSOR Editor](https://i.imgur.com/XGkMZOA.png) Check it out: https://cursor.sh",
        timestamp: new Date(Date.now() - 3500000 * 48), // 2 days ago
        reactions: [{ emoji: '👀', users: ['nikith', 'admin'], count: 2 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-3`,
        channelId: 'tech',
        userId: 'nani',
        username: 'Nani',
        avatar: 'NA',
        content: "I've been using both Windsurf and CURSOR. They each have their strengths. Windsurf's agentic capabilities are amazing for complex tasks, while CURSOR's code understanding is top-notch. Has anyone tried integrating them into our workflow?",
        timestamp: new Date(Date.now() - 3200000 * 24), // 1 day ago
        reactions: [{ emoji: '💯', users: ['nikith', 'sai', 'admin'], count: 3 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-4`,
        channelId: 'tech',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "@Sai @Nani I've been working on a way to use both tools together. CURSOR for code generation and Windsurf for higher-level planning. I'll share my setup later this week.",
        timestamp: new Date(Date.now() - 1800000 * 12), // 6 hours ago
        reactions: [{ emoji: '🚀', users: ['nikith', 'sai', 'nani'], count: 3 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-5`,
        channelId: 'tech',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: 'Team, I just got access to the Windsurf beta program. They have some incredible new features coming up including multi-agent collaboration and enhanced reasoning capabilities. Would anyone be interested in joining the beta testing group?',
        timestamp: new Date(Date.now() - 900000 * 5), // 75 minutes ago
        reactions: [{ emoji: '🙋', users: ['nikith', 'sai', 'nani'], count: 3 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-6`,
        channelId: 'tech',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: 'Just found this amazing article comparing Windsurf, CURSOR, and other AI coding assistants: https://dev.to/aitools/comparing-top-ai-coding-assistants-2023',
        timestamp: new Date(Date.now() - 300000 * 10), // 50 minutes ago
        reactions: [{ emoji: '🔖', users: ['sai', 'admin', 'nani'], count: 3 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-7`,
        channelId: 'tech',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: 'I just integrated Windsurf with our CI/CD pipeline. The results are impressive - it automatically fixes failing tests and suggests optimizations. @Nikith @Admin @Nani you should check out the demo: https://github.com/windsurf-examples/ci-cd-integration',
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        reactions: [{ emoji: '🎉', users: ['nikith', 'admin', 'nani'], count: 3 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      }
    ];
    initialMessages['tech'] = techMessages;
    
    // Empty general channel as requested
    initialMessages['general'] = [];
    
    // Add mock messages for Misogiai channel about the Misogi competition
    const misogiaiMessages = [
      {
        id: `msg-${Date.now()}-misogiai-1`,
        channelId: 'misogiai',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "Welcome to the Misogiai channel! This is where we'll be discussing everything related to the Masai Misogi competition. Congratulations to everyone who made it through the first round!",
        timestamp: new Date(Date.now() - 7200000 * 24), // 1 day ago
        reactions: [{ emoji: '🎉', users: ['jyosh', 'sai', 'nani', 'nikith'], count: 4 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-2`,
        channelId: 'misogiai',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Thanks Admin! I'm really excited to be part of this competition. Our team worked really hard on the first challenge.",
        timestamp: new Date(Date.now() - 7100000 * 24), // 1 day ago
        reactions: [{ emoji: '💪', users: ['sai', 'nani'], count: 2 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-3`,
        channelId: 'misogiai',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "Here's our team's submission for the first round. We built a real-time collaboration tool with WebSocket integration.",
        timestamp: new Date(Date.now() - 7000000 * 24), // 1 day ago
        reactions: [{ emoji: '👏', users: ['jyosh', 'admin', 'nani', 'nikith'], count: 4 }],
        fileAttachments: [
          {
            id: `file-${Date.now()}-1`,
            name: 'team_submission.pdf',
            type: 'pdf',
            url: 'https://example.com/files/team_submission.pdf',
            size: '2.4 MB'
          }
        ],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-4`,
        channelId: 'misogiai',
        userId: 'nani',
        username: 'Nani',
        avatar: 'NA',
        content: "I took some photos during our brainstorming session for the first round challenge. We had so many ideas on the whiteboard!",
        timestamp: new Date(Date.now() - 3600000 * 12), // 12 hours ago
        reactions: [{ emoji: '❤️', users: ['jyosh', 'sai'], count: 2 }],
        imageAttachments: [
          {
            id: `img-${Date.now()}-1`,
            url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
            alt: 'Team brainstorming session'
          }
        ],
        replies: [
          {
            id: `reply-${Date.now()}-misogiai-1`,
            channelId: 'misogiai',
            userId: 'nikith',
            username: 'Nikith',
            avatar: 'NI',
            content: "That was such a productive session! I remember we came up with the WebSocket solution during that meeting.",
            timestamp: new Date(Date.now() - 3500000 * 12), // 12 hours ago
            reactions: [{ emoji: '💡', users: ['nani', 'sai'], count: 2 }],
            replies: [],
            replyCount: 0,
            threadParticipants: []
          },
          {
            id: `reply-${Date.now()}-misogiai-2`,
            channelId: 'misogiai',
            userId: 'jyosh',
            username: 'Jyosh',
            avatar: 'JY',
            content: "Yes, and then we spent the next 48 hours implementing it. Those were some intense coding sessions!",
            timestamp: new Date(Date.now() - 3400000 * 12), // 12 hours ago
            reactions: [{ emoji: '🔥', users: ['nani', 'sai', 'nikith'], count: 3 }],
            replies: [],
            replyCount: 0,
            threadParticipants: []
          }
        ],
        replyCount: 2,
        threadParticipants: ['nikith', 'jyosh']
      },
      {
        id: `msg-${Date.now()}-misogiai-5`,
        channelId: 'misogiai',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "Here are the official results from the first round of the Misogi competition. Congratulations to all teams who made it to the next round!",
        timestamp: new Date(Date.now() - 3600000 * 6), // 6 hours ago
        reactions: [{ emoji: '🏆', users: ['jyosh', 'sai', 'nani', 'nikith'], count: 4 }],
        fileAttachments: [
          {
            id: `file-${Date.now()}-2`,
            name: 'round1_results.xlsx',
            type: 'excel',
            url: 'https://example.com/files/round1_results.xlsx',
            size: '1.2 MB'
          }
        ],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-6`,
        channelId: 'misogiai',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NI',
        content: "We made it to the second round! Our team ranked in the top 10. Here's a screenshot of our score.",
        timestamp: new Date(Date.now() - 1800000 * 2), // 1 hour ago
        reactions: [{ emoji: '🎊', users: ['jyosh', 'sai', 'nani', 'admin'], count: 4 }],
        imageAttachments: [
          {
            id: `img-${Date.now()}-2`,
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
            alt: 'Team score screenshot'
          }
        ],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-7`,
        channelId: 'misogiai',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "I've started preparing for the second round challenge. Here's a document with some initial ideas and research.",
        timestamp: new Date(Date.now() - 1700000 * 2), // 1 hour ago
        reactions: [{ emoji: '👍', users: ['jyosh', 'nani', 'nikith'], count: 3 }],
        fileAttachments: [
          {
            id: `file-${Date.now()}-3`,
            name: 'round2_prep.docx',
            type: 'word',
            url: 'https://example.com/files/round2_prep.docx',
            size: '1.8 MB'
          }
        ],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-misogiai-8`,
        channelId: 'misogiai',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Just sent you all a PR with the WebSocket fixes. The main issue was in how we were handling the WebSocket connections. They weren't being properly closed when components unmounted.",
        timestamp: new Date(Date.now() - 600000), // 10 minutes ago
        reactions: [{ emoji: '👌', users: ['sai', 'nani'], count: 2 }],
        replies: [
          {
            id: `reply-${Date.now()}-misogiai-3`,
            channelId: 'misogiai',
            userId: 'nani',
            username: 'Nani',
            avatar: 'NA',
            content: "Great catch, Jyosh! I've been debugging this issue for days. Can't believe it was something so simple yet so critical.",
            timestamp: new Date(Date.now() - 500000), // 8 minutes ago
            reactions: [],
            replies: [],
            replyCount: 0,
            threadParticipants: []
          }
        ],
        replyCount: 1,
        threadParticipants: ['nani']
      },
      {
        id: `msg-${Date.now()}-misogiai-9`,
        channelId: 'misogiai',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "Reminder: The second round of the Misogi competition starts next Monday. Make sure your teams are prepared and all your development environments are set up.",
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        reactions: [{ emoji: '📅', users: ['jyosh', 'sai', 'nani', 'nikith'], count: 4 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      }
    ];
    initialMessages['misogiai'] = misogiaiMessages;
    
    // Add mock messages for General-test channel with links in blue color
    const generalTestMessages = [
      {
        id: `msg-${Date.now()}-1`,
        channelId: 'general-test',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "Hey team, I found this great article about React performance optimization: https://reactjs.org/docs/optimizing-performance.html",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        reactions: [{ emoji: '👍', users: ['nikith', 'admin'], count: 2 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-2`,
        channelId: 'general-test',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: "Thanks for sharing! I also recommend checking out this tutorial on React hooks: https://reactjs.org/docs/hooks-intro.html",
        timestamp: new Date(Date.now() - 3500000), // 58 minutes ago
        reactions: [{ emoji: '👍', users: ['sai'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-3`,
        channelId: 'general-test',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "Here's a screenshot of our new dashboard design: ![Dashboard Design](https://i.imgur.com/JdKs4oZ.png) What do you think?",
        timestamp: new Date(Date.now() - 3400000), // 57 minutes ago
        reactions: [{ emoji: '👍', users: ['sai', 'nikith'], count: 2 }, { emoji: '❤️', users: ['jyosh'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-4`,
        channelId: 'general-test',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Looks amazing! I think we should also check out Tailwind CSS for styling: https://tailwindcss.com/docs",
        timestamp: new Date(Date.now() - 3300000), // 55 minutes ago
        reactions: [],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-5`,
        channelId: 'general-test',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "I agree with Jyosh. Tailwind would be perfect for this project. Here's a comparison of CSS frameworks: https://dev.to/theme_selection/best-css-frameworks-in-2023-301e",
        timestamp: new Date(Date.now() - 3200000), // 53 minutes ago
        reactions: [{ emoji: '👍', users: ['jyosh', 'nikith'], count: 2 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-6`,
        channelId: 'general-test',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: "Check out this cool animation library I found: https://www.framer.com/motion/ It works great with React and has amazing documentation.",
        timestamp: new Date(Date.now() - 3100000), // 52 minutes ago
        reactions: [{ emoji: '👍', users: ['sai'], count: 1 }, { emoji: '🔥', users: ['admin'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-7`,
        channelId: 'general-test',
        userId: 'admin',
        username: 'Admin',
        avatar: 'AD',
        content: "Here's another design option with a dark theme: ![Dark Theme](https://i.imgur.com/L7nIlHg.png) Which one do you prefer?",
        timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
        reactions: [{ emoji: '👍', users: ['jyosh'], count: 1 }, { emoji: '👎', users: ['sai'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-8`,
        channelId: 'general-test',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "I prefer the light theme. By the way, has anyone tried this new state management library? https://recoiljs.org/ It's developed by Facebook.",
        timestamp: new Date(Date.now() - 2900000), // 48 minutes ago
        reactions: [],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-9`,
        channelId: 'general-test',
        userId: 'sai',
        username: 'Sai',
        avatar: 'SA',
        content: "I've been using Redux Toolkit lately and it's much better than plain Redux: https://redux-toolkit.js.org/ Definitely worth checking out!",
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        reactions: [{ emoji: '💪', users: ['jyosh'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      }
    ];
    initialMessages['general-test'] = generalTestMessages;
    
    // Add personal conversation between Jyosh and Nikith in the secret channel
    const secretMessages = [
      {
        id: `msg-${Date.now()}-1`,
        channelId: 'secret',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Hey Nikith, I wanted to let you know that my dog Max passed away yesterday. I'm really struggling with it right now.",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        reactions: [],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-2`,
        channelId: 'secret',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: "Oh no, I'm so sorry to hear that Jyosh. Max was such a wonderful dog. How are you holding up?",
        timestamp: new Date(Date.now() - 86000000), // 23.9 hours ago
        reactions: [{ emoji: '❤️', users: ['jyosh'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-3`,
        channelId: 'secret',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Not great, to be honest. We had him for 12 years, since he was a puppy. The house feels so empty without him. Here's my favorite photo of him: ![Dog Max](https://i.imgur.com/6xPD9wK.jpg)",
        timestamp: new Date(Date.now() - 85000000), // 23.6 hours ago
        reactions: [{ emoji: '🙏', users: ['nikith'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-4`,
        channelId: 'secret',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: "He was such a beautiful dog. I remember when I visited last summer how excited he was to see everyone. Those memories will always be with you. Do you need anything? I can come over this weekend if you want some company.",
        timestamp: new Date(Date.now() - 84000000), // 23.3 hours ago
        reactions: [{ emoji: '🙏', users: ['jyosh'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-5`,
        channelId: 'secret',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "That would be really nice, actually. Maybe Saturday? I don't want to talk about it with the whole team yet, so I appreciate you keeping this between us for now.",
        timestamp: new Date(Date.now() - 82000000), // 22.8 hours ago
        reactions: [{ emoji: '👍', users: ['nikith'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-6`,
        channelId: 'secret',
        userId: 'nikith',
        username: 'Nikith',
        avatar: 'NK',
        content: "Of course, I understand. Saturday works for me. I'll bring over some food. And don't worry about work stuff for now - I've got your tasks covered for this week.",
        timestamp: new Date(Date.now() - 81000000), // 22.5 hours ago
        reactions: [{ emoji: '❤️', users: ['jyosh'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      },
      {
        id: `msg-${Date.now()}-7`,
        channelId: 'secret',
        userId: 'jyosh',
        username: 'Jyosh',
        avatar: 'JY',
        content: "Thank you, Nikith. You're a true friend. I really appreciate it.",
        timestamp: new Date(Date.now() - 79000000), // 21.9 hours ago
        reactions: [{ emoji: '❤️', users: ['nikith'], count: 1 }],
        replies: [],
        replyCount: 0,
        threadParticipants: []
      }
    ];
    initialMessages['secret'] = secretMessages;
    
    localStorage.setItem('messages_3', JSON.stringify(initialMessages));
    
    console.log('Test01 workspace initialized successfully with mock messages');
    return true;
  } catch (error) {
    console.error('Error initializing Test01 workspace:', error);
    return false;
  }
};

export default test01Data;
