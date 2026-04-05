export const categoriesTempData = [
  {
    id: 1,
    name: "Python Basics",
    slug: "python-basics",
    description: "Fundamentals of Python programming.",
    icon: "code",
    module_count: 3,
  },
  {
    id: 2,
    name: "Web Development",
    slug: "web-development",
    description: "Backend API and Django essentials.",
    icon: "globe",
    module_count: 1,
  },
];

export const modulesTempData = [
  {
    id: 10,
    category: 1,
    title: "Intro to Variables",
    description: "Learn variables and data types.",
    status: "active",
    level: "beginner",
    estimated_time: 20,
    prerequisites: [],
    module_action: "enroll",
    module_progress_percent: 0,
    module_completed_parts: 0,
    module_total_parts: 3,
    created_at: "2026-04-04T08:30:00Z",
    updated_at: "2026-04-04T08:30:00Z",
    module_ui: {
      hero_image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      concepts: [
        {
          title: "Variable",
          description: "A named container that stores a value in memory.",
        },
        {
          title: "Assignment",
          description: "The act of binding a value to a variable name.",
        },
        {
          title: "Type System",
          description:
            "Rules that describe what kind of value a variable holds.",
        },
      ],
      achievement: {
        title: "Syntax Starter",
        xpLabel: "120 XP Available",
      },
      studyTips: [
        "Say the variable name out loud before assigning a value.",
        "Rewrite examples with your own labels to build recall.",
      ],
      quiz: {
        question: "What is the main purpose of a variable in Python?",
        correctAnswer: "B",
        answers: [
          {
            id: "A",
            text: "To permanently store code outside the program.",
          },
          {
            id: "B",
            text: "To store and reference values by name while the program runs.",
          },
          {
            id: "C",
            text: "To convert every value into text automatically.",
          },
        ],
      },
    },
  },
  {
    id: 11,
    category: 1,
    title: "Functions 101",
    description: "Defining and calling functions.",
    status: "active",
    level: "beginner",
    estimated_time: 30,
    prerequisites: ["Intro to Variables"],
    module_action: "continue",
    module_progress_percent: 40,
    module_completed_parts: 1,
    module_total_parts: 3,
    created_at: "2026-04-04T10:00:00Z",
    updated_at: "2026-04-04T10:00:00Z",
    module_ui: {
      hero_image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
      concepts: [
        {
          title: "Function",
          description: "A reusable block of code that performs a task.",
        },
        {
          title: "Parameter",
          description: "An input a function can receive when it is called.",
        },
        {
          title: "Return Value",
          description: "The result a function sends back after running.",
        },
      ],
      achievement: {
        title: "Reusable Thinker",
        xpLabel: "180 XP Available",
      },
      studyTips: [
        "Identify repeated logic and imagine where a function could simplify it.",
        "Practice reading function definitions aloud from top to bottom.",
      ],
      quiz: {
        question: "Why do programmers create functions?",
        correctAnswer: "A",
        answers: [
          {
            id: "A",
            text: "To reuse logic and organize code into smaller units.",
          },
          {
            id: "B",
            text: "To prevent variables from ever changing value.",
          },
          {
            id: "C",
            text: "To replace all loops in a program.",
          },
        ],
      },
    },
  },
  {
    id: 12,
    category: 1,
    title: "Conditionals and Branching",
    description: "Guide decisions in Python using if, elif, and else.",
    status: "active",
    level: "beginner",
    estimated_time: 25,
    prerequisites: ["Intro to Variables", "Functions 101"],
    module_action: "enroll",
    module_progress_percent: 15,
    module_completed_parts: 0,
    module_total_parts: 3,
    created_at: "2026-04-04T11:00:00Z",
    updated_at: "2026-04-04T11:00:00Z",
    module_ui: {
      hero_image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      concepts: [
        {
          title: "Condition",
          description: "An expression that evaluates to true or false.",
        },
        {
          title: "Branching",
          description:
            "Choosing between different code paths based on a condition.",
        },
        {
          title: "Boolean Logic",
          description: "Rules that combine true and false evaluations.",
        },
      ],
      achievement: {
        title: "Logic Builder",
        xpLabel: "165 XP Available",
      },
      studyTips: [
        "Translate every if-statement into plain English first.",
        "Predict the branch before running the code.",
      ],
      quiz: {
        question: "What does an if statement help a program do?",
        correctAnswer: "C",
        answers: [
          {
            id: "A",
            text: "Repeat code forever without checking a condition.",
          },
          {
            id: "B",
            text: "Rename variables after the program has finished.",
          },
          {
            id: "C",
            text: "Choose different actions based on whether a condition is true.",
          },
        ],
      },
    },
  },
  {
    id: 20,
    category: 2,
    title: "Django API Foundations",
    description: "Understand routes, serializers, and API responses.",
    status: "active",
    level: "intermediate",
    estimated_time: 35,
    prerequisites: ["Python Basics"],
    module_action: "enroll",
    module_progress_percent: 0,
    module_completed_parts: 0,
    module_total_parts: 5,
    created_at: "2026-04-04T12:30:00Z",
    updated_at: "2026-04-04T12:30:00Z",
    module_ui: {
      hero_image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
      concepts: [
        {
          title: "Endpoint",
          description: "A URL where the API receives and responds to requests.",
        },
        {
          title: "Serializer",
          description: "A component that validates and shapes API data.",
        },
        {
          title: "HTTP Verb",
          description: "The action the client wants the API to perform.",
        },
      ],
      achievement: {
        title: "API Pathfinder",
        xpLabel: "240 XP Available",
      },
      studyTips: [
        "Trace one request from URL to response body.",
        "Compare GET and POST payloads side by side.",
      ],
      quiz: {
        question: "What is the role of a serializer in a Django API?",
        correctAnswer: "B",
        answers: [
          {
            id: "A",
            text: "It stores video files for lesson playback.",
          },
          {
            id: "B",
            text: "It validates and transforms data for requests and responses.",
          },
          {
            id: "C",
            text: "It deploys the application to production.",
          },
        ],
      },
    },
  },
];

export const lessonsTempData = [
  {
    id: 101,
    title: "What is a Variable?",
    content:
      "<p>Variables store values so your program can reference them later. In Python, you can create one by choosing a name and assigning a value with the equals sign.</p><p>Think of a variable as a label attached to a piece of information. That label lets you reuse the same value in multiple places without rewriting it.</p>",
    video_url: "https://cdn.example.com/videos/variable-intro.mp4",
    video_file: null,
    order: 1,
    category: 1,
    module: 10,
    created_at: "2026-04-04T09:00:00Z",
    updated_at: "2026-04-04T09:00:00Z",
    summary: "Understand what a variable is and why naming values matters.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 6,
  },

  {
    id: 102,
    title: "Primitive Data Types",
    content:
      "<p>Python variables can hold different kinds of values, including integers, floats, strings, and booleans. Each type changes what you can do with the data.</p><p>When two consecutive lessons share the same video source, learners can treat the second lesson as a continuation of the same walkthrough.</p>",
    video_url: "https://cdn.example.com/videos/variable-intro.mp4",
    video_file: null,
    order: 2,
    category: 1,
    module: 10,
    created_at: "2026-04-04T09:05:00Z",
    updated_at: "2026-04-04T09:05:00Z",
    summary:
      "Recognize the basic value types you will use in first Python programs.",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 7,
  },
  {
    id: 103,
    title: "Naming Variables Clearly",
    content:
      "<p>Readable variable names make code easier to understand. Names like <code>student_score</code> and <code>total_cost</code> communicate intent far better than generic labels like <code>x</code> or <code>tmp</code>.</p><p>As a rule of thumb, choose names that explain the role of the value without needing extra comments.</p>",
    video_url: null,
    video_file: "/media/lessons/variable-naming.mp4",
    order: 3,
    category: 1,
    module: 10,
    created_at: "2026-04-04T09:10:00Z",
    updated_at: "2026-04-04T09:10:00Z",
    summary:
      "Use naming conventions that make your code feel self-explanatory.",
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 5,
  },
  {
    id: 111,
    title: "Why Functions Matter",
    content:
      "<p>Functions help break large problems into smaller reusable steps. Instead of repeating the same instructions throughout your program, you define them once and call them whenever needed.</p><p>This keeps your code easier to test, reason about, and update.</p>",
    video_url: "https://cdn.example.com/videos/function-basics.mp4",
    video_file: null,
    order: 1,
    category: 1,
    module: 11,
    created_at: "2026-04-04T10:00:00Z",
    updated_at: "2026-04-04T10:00:00Z",
    summary: "See how functions reduce repetition and improve structure.",
    thumbnail:
      "https://images.unsplash.com/photo-1515876305430-f06edab8282a?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 8,
  },
  {
    id: 112,
    title: "Parameters and Inputs",
    content:
      "<p>Parameters let a function accept information from the outside world. They make the function flexible because the same block of code can work with different values each time it runs.</p><p>For example, a function that greets a user becomes more useful when the name is passed in as a parameter.</p>",
    video_url: "https://cdn.example.com/videos/function-basics.mp4",
    video_file: null,
    order: 2,
    category: 1,
    module: 11,
    created_at: "2026-04-04T10:08:00Z",
    updated_at: "2026-04-04T10:08:00Z",
    summary: "Learn how parameters make one function usable in many contexts.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 9,
  },
  {
    id: 113,
    title: "Returning Results",
    content:
      "<p>A function can send a value back using <code>return</code>. This lets the rest of your program capture the result and use it later, instead of only printing inside the function.</p><p>Returning values is one of the biggest differences between toy examples and truly reusable functions.</p>",
    video_url: null,
    video_file: "/media/lessons/functions-return-values.mp4",
    order: 3,
    category: 1,
    module: 11,
    created_at: "2026-04-04T10:18:00Z",
    updated_at: "2026-04-04T10:18:00Z",
    summary: "Understand how functions pass useful results back to the caller.",
    thumbnail:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 8,
  },
  {
    id: 121,
    title: "Boolean Expressions",
    content:
      "<p>Conditions are built from expressions that evaluate to either <code>True</code> or <code>False</code>. These expressions often compare values using operators like <code>&gt;</code>, <code>&lt;</code>, and <code>==</code>.</p>",
    video_url: "https://cdn.example.com/videos/conditionals-intro.mp4",
    video_file: null,
    order: 1,
    category: 1,
    module: 12,
    created_at: "2026-04-04T11:00:00Z",
    updated_at: "2026-04-04T11:00:00Z",
    summary:
      "Start reading and writing expressions that evaluate to true or false.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 7,
  },
  {
    id: 122,
    title: "Writing if / elif / else",
    content:
      "<p>Python uses indentation to group the code that should run when a condition is true. As your decision tree grows, <code>elif</code> and <code>else</code> help you describe alternate paths clearly.</p>",
    video_url: "https://cdn.example.com/videos/conditionals-intro.mp4",
    video_file: null,
    order: 2,
    category: 1,
    module: 12,
    created_at: "2026-04-04T11:08:00Z",
    updated_at: "2026-04-04T11:08:00Z",
    summary: "Build readable branching logic with multiple outcomes.",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 10,
  },
  {
    id: 123,
    title: "Combining Conditions",
    content:
      "<p>Boolean operators like <code>and</code>, <code>or</code>, and <code>not</code> help you write more expressive logic. They let one branch respond to several rules at once.</p><p>This is where conditionals start to feel powerful rather than mechanical.</p>",
    video_url: null,
    video_file: "/media/lessons/combining-conditions.mp4",
    order: 3,
    category: 1,
    module: 12,
    created_at: "2026-04-04T11:18:00Z",
    updated_at: "2026-04-04T11:18:00Z",
    summary:
      "Use boolean operators to handle more realistic branching scenarios.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 8,
  },
  {
    id: 201,
    title: "What an API Endpoint Does",
    content:
      "<p>An endpoint is the address a client talks to when it needs information or wants to perform an action. In Django, routes connect that URL to a view that handles the request.</p>",
    video_url: "https://cdn.example.com/videos/django-api-foundations.mp4",
    video_file: null,
    order: 1,
    category: 2,
    module: 20,
    created_at: "2026-04-04T12:30:00Z",
    updated_at: "2026-04-04T12:30:00Z",
    summary: "Map the path from request URL to view logic.",
    thumbnail:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 10,
  },
  {
    id: 202,
    title: "Serializers in Practice",
    content:
      "<p>Serializers validate incoming data and format outgoing responses. They help ensure your API stays predictable, safe, and easy for clients to consume.</p>",
    video_url: "https://cdn.example.com/videos/django-api-foundations.mp4",
    video_file: null,
    order: 2,
    category: 2,
    module: 20,
    created_at: "2026-04-04T12:40:00Z",
    updated_at: "2026-04-04T12:40:00Z",
    summary: "See how serializers guard and shape the data your API handles.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 12,
  },
  {
    id: 203,
    title: "Consistent API Responses",
    content:
      "<p>Clear response shapes make frontend work faster because the client knows what to expect. Good APIs balance useful metadata, readable field names, and consistent structure across endpoints.</p>",
    video_url: null,
    video_file: "/media/lessons/django-api-responses.mp4",
    order: 3,
    category: 2,
    module: 20,
    created_at: "2026-04-04T12:52:00Z",
    updated_at: "2026-04-04T12:52:00Z",
    summary: "Learn how stable response contracts reduce integration friction.",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 11,
  },
  {
    id: 204,
    title: "Common Response Metadata",
    content:
      "<p>Pagination fields like <code>count</code>, <code>next</code>, <code>previous</code>, and <code>results</code> help frontend clients understand how to navigate list data. This structure makes collection endpoints more predictable and easier to integrate.</p><p>It also gives the UI enough information to build pagers, infinite lists, or status summaries.</p>",
    video_url: "https://cdn.example.com/videos/django-api-pagination.mp4",
    video_file: null,
    order: 4,
    category: 2,
    module: 20,
    created_at: "2026-04-04T13:02:00Z",
    updated_at: "2026-04-04T13:02:00Z",
    summary:
      "Learn why consistent metadata makes list endpoints easier to consume.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 9,
  },
  {
    id: 205,
    title: "Designing Frontend-Friendly Contracts",
    content:
      "<p>Strong API contracts reduce guesswork on the frontend. Naming fields consistently, returning meaningful status values, and documenting required relations help the UI stay simple and resilient.</p><p>This is where backend design directly improves product velocity for every consumer of the API.</p>",
    video_url: null,
    video_file: "/media/lessons/frontend-friendly-contracts.mp4",
    order: 5,
    category: 2,
    module: 20,
    created_at: "2026-04-04T13:14:00Z",
    updated_at: "2026-04-04T13:14:00Z",
    summary:
      "See how thoughtful response design removes friction for frontend implementation.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    estimated_minutes: 13,
  },
];

function getLessonsByModuleId(moduleId) {
  return lessonsTempData
    .filter((lesson) => lesson.module === moduleId)
    .sort((a, b) => a.order - b.order)
    .map((lesson, index, lessons) => {
      const previousLesson = lessons[index - 1];
      const continuesPreviousVideo =
        Boolean(lesson.video_url) &&
        previousLesson?.video_url === lesson.video_url;

      return {
        ...lesson,
        lesson_kind: continuesPreviousVideo
          ? "continued_video"
          : lesson.video_url
            ? "video"
            : "video_file",
        presentation_label: continuesPreviousVideo
          ? "Continues module video"
          : lesson.video_url
            ? "Video lesson"
            : "Guided lesson file",
      };
    });
}

export function fetchCategoryList() {
  return Promise.resolve({
    count: categoriesTempData.length,
    next: null,
    previous: null,
    results: categoriesTempData,
  });
}

export function fetchModuleList({ categoryId } = {}) {
  const filteredModules = categoryId
    ? modulesTempData.filter(
        (module) => String(module.category) === String(categoryId),
      )
    : modulesTempData;

  return Promise.resolve({
    count: filteredModules.length,
    next: null,
    previous: null,
    results: filteredModules,
  });
}

export function fetchLessonList({ moduleId } = {}) {
  const filteredLessons = moduleId
    ? getLessonsByModuleId(Number(moduleId))
    : lessonsTempData;

  return Promise.resolve({
    count: filteredLessons.length,
    next: null,
    previous: null,
    results: filteredLessons,
  });
}

export function fetchModuleDetailById(moduleId) {
  const matchedModule =
    modulesTempData.find((module) => String(module.id) === String(moduleId)) ??
    null;

  if (!matchedModule) {
    return Promise.resolve(null);
  }

  const categoryData =
    categoriesTempData.find(
      (category) => category.id === matchedModule.category,
    ) ?? null;
  const categoryModules = modulesTempData
    .filter((module) => module.category === matchedModule.category)
    .sort((a, b) => a.id - b.id);
  const currentIndex = categoryModules.findIndex(
    (module) => module.id === matchedModule.id,
  );
  const lessons = getLessonsByModuleId(matchedModule.id);
  const primaryLesson = lessons[0] ?? null;

  return Promise.resolve({
    ...matchedModule,
    categoryData,
    lessons,
    primaryLesson,
    moduleNumber: currentIndex + 1,
    totalModules: categoryModules.length,
    navigation: {
      categoryId: categoryData?.id ?? null,
      categoryTitle: categoryData?.name ?? "Category",
      previousModule:
        currentIndex > 0 ? categoryModules[currentIndex - 1] : null,
      nextModule:
        currentIndex < categoryModules.length - 1
          ? categoryModules[currentIndex + 1]
          : null,
    },
  });
}
