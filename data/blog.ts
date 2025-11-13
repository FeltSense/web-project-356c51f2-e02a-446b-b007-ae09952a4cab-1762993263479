export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Building Muscle: Science-Based Approach',
    slug: 'ultimate-guide-building-muscle',
    excerpt: 'Discover the proven strategies for building lean muscle mass through progressive overload, proper nutrition, and recovery optimization.',
    content: `# The Ultimate Guide to Building Muscle: Science-Based Approach

Building muscle is both an art and a science. Understanding the fundamental principles behind muscle growth will help you maximize your results and avoid common pitfalls that keep many people from reaching their goals.

## The Science of Muscle Growth

Muscle growth, or hypertrophy, occurs through three primary mechanisms:

- **Mechanical Tension**: The force your muscles generate during resistance training
- **Metabolic Stress**: The buildup of metabolites during high-intensity exercise
- **Muscle Damage**: Microscopic tears that trigger the repair and growth process

## Progressive Overload: The Foundation

Progressive overload is the gradual increase of stress placed on your muscles over time:

### Key Methods:
- **Increase Weight**: Add 2.5-5 lbs when you can complete all sets with perfect form
- **Add Reps**: Increase repetitions within your target range
- **Add Sets**: Include additional working sets for stubborn muscle groups
- **Improve Form**: Focus on time under tension and mind-muscle connection

## Essential Compound Movements

Build your routine around these fundamental exercises:

### Upper Body:
- **Bench Press**: Chest, shoulders, triceps
- **Pull-ups/Rows**: Back, biceps, rear delts
- **Overhead Press**: Shoulders, triceps, core
- **Dips**: Chest, triceps, front delts

### Lower Body:
- **Squats**: Quads, glutes, core
- **Deadlifts**: Hamstrings, glutes, back, traps
- **Lunges**: Unilateral leg strength and stability
- **Hip Thrusts**: Glute activation and power

## Optimal Training Variables

### Frequency
Train each muscle group 2-3 times per week for maximum growth stimulus.

### Volume
Aim for 10-20 sets per muscle group per week, adjusting based on recovery capacity.

### Intensity
Work primarily in the 6-12 rep range for hypertrophy, with some strength (3-5 reps) and endurance (12-20 reps) work.

### Rest Periods
- Compound movements: 2-4 minutes
- Isolation exercises: 1-2 minutes
- Adjust based on performance and recovery

## Nutrition for Muscle Growth

### Caloric Surplus
Consume 300-500 calories above maintenance for lean muscle gain.

### Protein Requirements
- **Minimum**: 0.8g per pound of body weight
- **Optimal**: 1.0-1.2g per pound of body weight
- **Timing**: Spread throughout the day, 20-40g per meal

### Carbohydrates
- **Pre-workout**: 30-50g for energy
- **Post-workout**: 50-100g for recovery
- **Daily**: 2-3g per pound of body weight for active individuals

### Fats
Include 0.3-0.5g per pound of body weight for hormone production and overall health.

## Recovery and Sleep

### Sleep Optimization
- **Duration**: 7-9 hours per night
- **Quality**: Dark, cool room (65-68°F)
- **Consistency**: Same bedtime and wake time daily
- **Pre-sleep**: Avoid screens 1 hour before bed

### Active Recovery
- Light cardio (walking, swimming)
- Mobility and stretching
- Massage or foam rolling
- Stress management techniques

## Common Mistakes to Avoid

1. **Ego Lifting**: Using too much weight with poor form
2. **Inconsistent Training**: Skipping workouts or changing programs too frequently
3. **Inadequate Nutrition**: Not eating enough or poor food choices
4. **Neglecting Recovery**: Insufficient sleep or rest days
5. **Impatience**: Expecting results too quickly

## Sample Beginner Program

### Day 1: Upper Body
- Bench Press: 3x8-10
- Bent-over Row: 3x8-10
- Overhead Press: 3x10-12
- Pull-ups/Lat Pulldown: 3x10-12
- Dips: 2x12-15
- Barbell Curls: 2x12-15

### Day 2: Lower Body
- Squats: 3x8-10
- Romanian Deadlifts: 3x10-12
- Bulgarian Split Squats: 2x12 each leg
- Hip Thrusts: 3x12-15
- Calf Raises: 3x15-20
- Plank: 3x30-60 seconds

### Day 3: Rest or Active Recovery

Repeat this pattern throughout the week, allowing at least one full rest day.

## Tracking Progress

### Measurements
- Body weight (weekly)
- Body measurements (monthly)
- Progress photos (monthly)
- Strength gains (weekly)

### Performance Metrics
- Weight lifted
- Reps completed
- Time under tension
- Rate of perceived exertion (RPE)

## Conclusion

Building muscle requires consistency, patience, and adherence to proven principles. Focus on progressive overload, eat adequate protein, get quality sleep, and trust the process. Results take time, but with dedication and the right approach, you'll achieve the physique you're working toward.

Remember: muscle building is a marathon, not a sprint. Stay consistent, be patient, and enjoy the journey of becoming stronger and more confident.`,
    author: {
      name: 'Marcus Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Certified Personal Trainer and Strength Coach with 10+ years of experience helping clients build muscle and transform their physiques.'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
    tags: ['Muscle Building', 'Strength Training', 'Progressive Overload', 'Hypertrophy'],
    category: 'Training',
    readingTime: 8,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Ultimate Muscle Building Guide - Science-Based Training',
    seoDescription: 'Master muscle building with our comprehensive guide covering progressive overload, nutrition, recovery, and proven training strategies for maximum growth.'
  },
  {
    id: '2',
    title: 'Fat Loss Fundamentals: Creating a Sustainable Caloric Deficit',
    slug: 'fat-loss-fundamentals-caloric-deficit',
    excerpt: 'Learn the science behind fat loss and discover sustainable strategies for creating and maintaining a caloric deficit without sacrificing muscle mass.',
    content: `# Fat Loss Fundamentals: Creating a Sustainable Caloric Deficit

Fat loss is fundamentally about energy balance, but the devil is in the details. Understanding how to create and maintain a caloric deficit while preserving muscle mass and maintaining your sanity is the key to long-term success.

## Understanding Energy Balance

The foundation of fat loss is simple thermodynamics:

- **Calories In < Calories Out = Fat Loss**
- **Calories In > Calories Out = Fat Gain**
- **Calories In = Calories Out = Maintenance**

However, the human body is complex, and several factors influence this equation.

## Calculating Your Caloric Needs

### Basal Metabolic Rate (BMR)
Your BMR represents the calories needed for basic bodily functions at rest.

**Mifflin-St Jeor Equation:**
- **Men**: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5
- **Women**: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161

### Total Daily Energy Expenditure (TDEE)
Multiply your BMR by your activity factor:

- **Sedentary (desk job, no exercise)**: BMR × 1.2
- **Lightly active (light exercise 1-3 days/week)**: BMR × 1.375
- **Moderately active (moderate exercise 3-5 days/week)**: BMR × 1.55
- **Very active (hard exercise 6-7 days/week)**: BMR × 1.725
- **Extremely active (physical job + exercise)**: BMR × 1.9

## Creating Your Caloric Deficit

### Deficit Size Guidelines
- **Aggressive**: 750-1000 calorie deficit (1.5-2 lbs/week loss)
- **Moderate**: 500-750 calorie deficit (1-1.5 lbs/week loss)
- **Conservative**: 250-500 calorie deficit (0.5-1 lb/week loss)

### Methods to Create Deficit

#### 1. Dietary Restriction (70% of deficit)
- Reduce portion sizes
- Choose lower-calorie foods
- Eliminate liquid calories
- Increase protein intake

#### 2. Increased Activity (30% of deficit)
- Add cardio sessions
- Increase daily steps
- Include resistance training
- Take stairs instead of elevators

## Macronutrient Distribution for Fat Loss

### Protein: The King of Macros
- **Amount**: 0.8-1.2g per pound of body weight
- **Benefits**: Muscle preservation, increased satiety, higher thermic effect
- **Sources**: Lean meats, fish, eggs, dairy, legumes

### Fats: Essential for Hormones
- **Amount**: 0.25-0.35g per pound of body weight
- **Benefits**: Hormone production, nutrient absorption, satiety
- **Sources**: Nuts, oils, avocado, fatty fish

### Carbohydrates: Fuel for Performance
- **Amount**: Fill remaining calories after protein and fat
- **Benefits**: Energy for workouts, muscle glycogen, fiber
- **Sources**: Vegetables, fruits, whole grains, legumes

## Meal Timing and Frequency

### Intermittent Fasting Options
- **16:8**: 16-hour fast, 8-hour eating window
- **18:6**: 18-hour fast, 6-hour eating window
- **OMAD**: One meal a day
- **5:2**: Normal eating 5 days, restricted calories 2 days

### Traditional Approach
- 3-6 smaller meals throughout the day
- Focus on protein at each meal
- Include vegetables with most meals

## Cardio for Fat Loss

### Low-Intensity Steady State (LISS)
- **Duration**: 30-60 minutes
- **Intensity**: 60-70% max heart rate
- **Examples**: Walking, cycling, swimming
- **Benefits**: Easy recovery, sustainable, fat oxidation

### High-Intensity Interval Training (HIIT)
- **Duration**: 15-30 minutes
- **Structure**: Work:rest ratios (1:1, 1:2, 1:3)
- **Examples**: Sprints, bike intervals, rowing
- **Benefits**: Time-efficient, EPOC effect, metabolic boost

### Resistance Training
- **Frequency**: 3-4 times per week
- **Focus**: Compound movements, progressive overload
- **Benefits**: Muscle preservation, increased metabolism
- **Rep ranges**: 6-15 reps for most exercises

## Common Fat Loss Mistakes

### 1. Too Aggressive Deficit
- Leads to muscle loss
- Causes metabolic adaptation
- Increases hunger and cravings
- Reduces adherence

### 2. Eliminating Entire Food Groups
- Creates unnecessary restrictions
- Leads to nutrient deficiencies
- Increases likelihood of binge eating
- Not sustainable long-term

### 3. Ignoring Strength Training
- Results in muscle loss
- Reduces metabolic rate
- Creates "skinny fat" appearance
- Decreases functional strength

### 4. Expecting Linear Progress
- Weight fluctuates daily
- Progress isn't always visible on scale
- Plateaus are normal
- Non-scale victories matter

## Tracking Progress

### Scale Weight
- Weigh daily, same time
- Look at weekly averages
- Expect fluctuations
- Don't panic over daily changes

### Body Measurements
- Waist circumference
- Hip circumference
- Chest, arms, thighs
- Take monthly measurements

### Progress Photos
- Same lighting and poses
- Weekly or bi-weekly
- Front, side, and back views
- Often more telling than scale

### Performance Metrics
- Strength maintenance/gains
- Endurance improvements
- Energy levels
- Sleep quality

## Dealing with Plateaus

### Refeed Days
- Increase calories to maintenance
- Focus on carbohydrates
- 1-2 days per week
- Helps reset hormones

### Diet Breaks
- Return to maintenance calories
- 1-2 weeks duration
- Every 6-8 weeks of dieting
- Psychological and physiological reset

### Adjusting Variables
- Reduce calories by 100-200
- Add 10-15 minutes of cardio
- Increase daily steps by 1000-2000
- Change exercise selection

## Sustainable Habits for Long-Term Success

### Meal Preparation
- Plan meals in advance
- Batch cook proteins and vegetables
- Pre-portion snacks
- Have backup options ready

### Mindful Eating
- Eat slowly and chew thoroughly
- Eliminate distractions during meals
- Pay attention to hunger cues
- Practice portion control

### Stress Management
- Prioritize sleep (7-9 hours)
- Practice relaxation techniques
- Manage work-life balance
- Consider meditation or yoga

### Social Support
- Find workout partners
- Join fitness communities
- Share goals with friends/family
- Consider working with a coach

## Conclusion

Successful fat loss requires a comprehensive approach that goes beyond simply "eating less and moving more." By understanding the science behind energy balance, creating a moderate caloric deficit, prioritizing protein intake, and maintaining consistency, you can achieve sustainable fat loss while preserving muscle mass and your sanity.

Remember: fat loss is not a sprint—it's a marathon. Focus on building habits that you can maintain long-term, and the results will follow. Be patient with the process, celebrate small victories, and don't let temporary setbacks derail your progress.

The best diet is the one you can stick to, and the best exercise program is the one you'll actually do consistently.`,
    author: {
      name: 'Dr. Lisa Martinez',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Registered Dietitian and Exercise Physiologist specializing in sustainable fat loss and metabolic health.'
    },
    publishedAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-15T16:45:00Z',
    tags: ['Fat Loss', 'Nutrition', 'Caloric Deficit', 'Weight Management'],
    category: 'Nutrition',
    readingTime: 12,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Fat Loss Fundamentals - Sustainable Caloric Deficit Guide',
    seoDescription: 'Master fat loss with our science-based guide to creating sustainable caloric deficits, preserving muscle mass, and achieving long-term results.'
  },

  {
    id: '3',
    title: 'The Perfect Workout Split: Finding Your Ideal Training Schedule',
    slug: 'perfect-workout-split-training-schedule',
    excerpt: 'Discover the most effective workout splits for different goals, experience levels, and schedules. Learn how to structure your training for maximum results.',
    content: `# The Perfect Workout Split: Finding Your Ideal Training Schedule

Choosing the right workout split is crucial for maximizing your results while fitting training into your lifestyle. The perfect split depends on your goals, experience level, recovery capacity, and available time. Let's explore the most effective options.

## Understanding Workout Splits

A workout split refers to how you divide your training sessions throughout the week, determining which muscle groups you train together and how often you train each body part.

### Key Factors to Consider:
- **Training Experience**: Beginners vs. advanced lifters
- **Available Time**: Days per week and session length
- **Recovery Capacity**: Age, sleep, stress, nutrition
- **Primary Goals**: Strength, muscle building, fat loss, general fitness
- **Lifestyle**: Work schedule, family commitments, other activities

## Full Body Splits

Train all major muscle groups in each session.

### Who It's For:
- Beginners (first 6-12 months)
- Those with limited time (2-3 days/week)
- Older adults prioritizing recovery
- General fitness enthusiasts

### Sample 3-Day Full Body Split:

**Day 1: Monday**
- Squats: 3x8-10
- Bench Press: 3x8-10
- Bent-over Rows: 3x8-10
- Overhead Press: 2x10-12
- Romanian Deadlifts: 2x10-12
- Plank: 2x30-60 seconds

**Day 2: Wednesday**
- Deadlifts: 3x5-6
- Incline Dumbbell Press: 3x8-10
- Pull-ups/Lat Pulldowns: 3x8-10
- Dumbbell Shoulder Press: 2x10-12
- Bulgarian Split Squats: 2x10 each leg
- Russian Twists: 2x20

**Day 3: Friday**
- Front Squats: 3x8-10
- Dumbbell Bench Press: 3x10-12
- Cable Rows: 3x10-12
- Lateral Raises: 2x12-15
- Hip Thrusts: 2x12-15
- Dead Bug: 2x10 each side

### Pros:
- High training frequency (each muscle 3x/week)
- Flexible scheduling
- Great for beginners
- Efficient use of time

### Cons:
- Limited volume per muscle group per session
- Can be fatiguing for advanced lifters
- Less specialization possible

## Upper/Lower Splits

Alternate between upper body and lower body training days.

### Who It's For:
- Intermediate lifters (6+ months experience)
- Those training 4-6 days per week
- People wanting more volume than full body
- Balanced physique development

### Sample 4-Day Upper/Lower Split:

**Day 1: Upper Body**
- Bench Press: 4x6-8
- Bent-over Rows: 4x6-8
- Overhead Press: 3x8-10
- Pull-ups: 3x8-10
- Dips: 3x10-12
- Barbell Curls: 3x10-12
- Close-grip Bench Press: 3x10-12

**Day 2: Lower Body**
- Squats: 4x6-8
- Romanian Deadlifts: 3x8-10
- Bulgarian Split Squats: 3x10 each leg
- Hip Thrusts: 3x12-15
- Walking Lunges: 2x12 each leg
- Calf Raises: 4x15-20
- Plank: 3x45-60 seconds

**Day 3: Upper Body**
- Incline Dumbbell Press: 4x8-10
- T-Bar Rows: 4x8-10
- Dumbbell Shoulder Press: 3x10-12
- Cable Rows: 3x10-12
- Lateral Raises: 3x12-15
- Hammer Curls: 3x12-15
- Overhead Tricep Extension: 3x12-15

**Day 4: Lower Body**
- Deadlifts: 4x5-6
- Front Squats: 3x8-10
- Single-leg RDLs: 3x10 each leg
- Leg Press: 3x12-15
- Leg Curls: 3x12-15
- Calf Raises: 4x15-20
- Russian Twists: 3x20

### Pros:
- Good training frequency (2x/week per muscle)
- More volume per muscle group
- Better recovery between sessions
- Flexible scheduling

### Cons:
- Requires 4+ days per week
- Upper body sessions can be long
- Less specialization than body part splits

## Push/Pull/Legs (PPL)

Divide training by movement patterns and muscle groups.

### Who It's For:
- Intermediate to advanced lifters
- Those training 6 days per week
- People wanting high volume and frequency
- Bodybuilding-focused individuals

### Sample 6-Day PPL Split:

**Day 1: Push (Chest, Shoulders, Triceps)**
- Bench Press: 4x6-8
- Overhead Press: 4x8-10
- Incline Dumbbell Press: 3x10-12
- Lateral Raises: 4x12-15
- Dips: 3x10-12
- Close-grip Bench Press: 3x10-12
- Overhead Tricep Extension: 3x12-15

**Day 2: Pull (Back, Biceps)**
- Deadlifts: 4x5-6
- Pull-ups: 4x6-10
- Bent-over Rows: 4x8-10
- Cable Rows: 3x10-12
- Face Pulls: 3x15-20
- Barbell Curls: 4x10-12
- Hammer Curls: 3x12-15

**Day 3: Legs (Quads, Hamstrings, Glutes, Calves)**
- Squats: 4x6-8
- Romanian Deadlifts: 4x8-10
- Bulgarian Split Squats: 3x10 each leg
- Leg Press: 3x12-15
- Leg Curls: 3x12-15
- Calf Raises: 4x15-20
- Abs Circuit: 10 minutes

**Days 4-6: Repeat with slight variations**

### Pros:
- High volume and frequency
- Logical muscle grouping
- Great for muscle building
- Allows for specialization

### Cons:
- Requires 6 days per week commitment
- Can be overwhelming for beginners
- High recovery demands
- Time-intensive

## Body Part Splits

Train one or two muscle groups per session with high volume.

### Who It's For:
- Advanced lifters (2+ years)
- Bodybuilders and physique competitors
- Those with specific weak points to address
- People with excellent recovery capacity

### Sample 5-Day Body Part Split:

**Day 1: Chest**
- Bench Press: 4x6-8
- Incline Dumbbell Press: 4x8-10
- Decline Bench Press: 3x10-12
- Dumbbell Flyes: 3x12-15
- Cable Crossovers: 3x12-15
- Push-ups: 2xAMRAP

**Day 2: Back**
- Deadlifts: 4x5-6
- Pull-ups: 4x6-10
- Bent-over Rows: 4x8-10
- T-Bar Rows: 3x10-12
- Cable Rows: 3x10-12
- Lat Pulldowns: 3x12-15

**Day 3: Shoulders**
- Overhead Press: 4x6-8
- Dumbbell Shoulder Press: 4x8-10
- Lateral Raises: 4x12-15
- Rear Delt Flyes: 4x12-15
- Upright Rows: 3x10-12
- Face Pulls: 3x15-20

**Day 4: Arms**
- Close-grip Bench Press: 4x8-10
- Barbell Curls: 4x8-10
- Overhead Tricep Extension: 3x10-12
- Hammer Curls: 3x10-12
- Dips: 3x10-12
- Cable Curls: 3x12-15

**Day 5: Legs**
- Squats: 4x6-8
- Romanian Deadlifts: 4x8-10
- Leg Press: 3x12-15
- Leg Curls: 3x12-15
- Bulgarian Split Squats: 3x10 each leg
- Calf Raises: 4x15-20

### Pros:
- Maximum volume per muscle group
- Allows for specialization
- Great for advanced lifters
- Shorter individual sessions

### Cons:
- Low training frequency (1x/week)
- Requires advanced recovery
- Can lead to imbalances
- Not ideal for beginners

## Choosing Your Split

### For Beginners (0-6 months):
**Recommendation**: 3-day Full Body
- Focus on learning movements
- Build base strength and conditioning
- Establish consistent habits

### For Intermediate (6-18 months):
**Recommendation**: 4-day Upper/Lower or 3-day Full Body
- Increase training volume
- Continue progressive overload
- Add exercise variety

### For Advanced (18+ months):
**Recommendation**: 6-day PPL or 5-day Body Part Split
- Maximize volume and frequency
- Address weak points
- Fine-tune physique

## Programming Tips

### Progressive Overload
- Increase weight when you can complete all sets with 2+ reps in reserve
- Add reps before adding weight
- Track your workouts consistently

### Exercise Selection
- Prioritize compound movements
- Include unilateral exercises
- Add isolation work for weak points
- Rotate exercises every 4-6 weeks

### Volume Guidelines
- Beginners: 10-14 sets per muscle per week
- Intermediate: 14-20 sets per muscle per week
- Advanced: 16-26 sets per muscle per week

### Recovery Considerations
- Take at least one full rest day per week
- Listen to your body
- Prioritize sleep (7-9 hours)
- Manage stress levels

## Common Mistakes

### 1. Changing Splits Too Often
- Stick with a split for at least 6-8 weeks
- Master the basics before advancing
- Consistency trumps perfection

### 2. Ignoring Recovery
- More isn't always better
- Quality over quantity
- Deload every 4-6 weeks

### 3. Poor Exercise Selection
- Don't neglect compound movements
- Balance pushing and pulling
- Include unilateral work

### 4. Inadequate Progression
- Track your workouts
- Aim for gradual improvements
- Don't rush the process

## Conclusion

The perfect workout split is the one you can consistently follow while making progress toward your goals. Start with a simpler split and gradually increase complexity as you gain experience and improve your recovery capacity.

Remember: the best program is the one you'll actually stick to. Choose a split that fits your lifestyle, matches your experience level, and aligns with your goals. Consistency and progressive overload matter more than the perfect split.

Focus on mastering the basics, tracking your progress, and listening to your body. With time and dedication, any well-designed split can help you achieve remarkable results.`,
    author: {
      name: 'Coach Ryan Mitchell',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Certified Strength and Conditioning Specialist with 12+ years of experience designing training programs for athletes and fitness enthusiasts.'
    },
    publishedAt: '2024-01-05T14:00:00Z',
    updatedAt: '2024-01-12T11:20:00Z',
    tags: ['Workout Splits', 'Training Programs', 'Strength Training', 'Exercise Programming'],
    category: 'Training',
    readingTime: 10,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Perfect Workout Split Guide - Training Schedule for Every Level',
    seoDescription: 'Find your ideal workout split with our comprehensive guide covering full body, upper/lower, PPL, and body part splits for all experience levels.'
  }


];

export const categories = [
  'All',
  'Training',
  'Nutrition',
  'Recovery',
  'Supplements',
  'Motivation'
];

export const tags = [
  'Muscle Building',
  'Fat Loss',
  'Strength Training',
  'Cardio',
  'Nutrition',
  'Progressive Overload',
  'Workout Splits',
  'Recovery',
  'Supplements',
  'Motivation'
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const related = blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .sort((a, b) => {
      const aScore = (a.category === currentPost.category ? 2 : 0) +
                     a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bScore = (b.category === currentPost.category ? 2 : 0) +
                     b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);

  return related;
}