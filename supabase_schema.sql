-- ==============================================================================
-- চাঁদের আলো ফাউন্ডেশন (Chader Alo Foundation)
-- Supabase PostgreSQL Cloud Database Schema & Row Level Security (RLS) Setup
-- ==============================================================================

-- 1. Enable UUID Extension (if needed)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 2. CREATE TABLES
-- ------------------------------------------------------------------------------

-- Table: Blood Donors (রক্তদাতা তালিকা)
CREATE TABLE IF NOT EXISTS public.donors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    father TEXT DEFAULT '',
    blood_group TEXT NOT NULL,
    dob TEXT DEFAULT '',
    gender TEXT DEFAULT 'পুরুষ',
    weight NUMERIC DEFAULT 0,
    phone TEXT NOT NULL UNIQUE,
    whatsapp TEXT DEFAULT '',
    upazila TEXT DEFAULT 'গজারিয়া',
    village TEXT DEFAULT '',
    has_donated TEXT DEFAULT 'হ্যাঁ',
    last_donation_date TEXT DEFAULT '',
    donation_count INTEGER DEFAULT 0,
    verified BOOLEAN DEFAULT TRUE,
    status TEXT DEFAULT 'active',
    photo TEXT DEFAULT '',
    is_demo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Volunteers (স্বেচ্ছাসেবী কর্নার)
CREATE TABLE IF NOT EXISTS public.volunteers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    father TEXT DEFAULT '',
    blood_group TEXT DEFAULT '',
    dob TEXT DEFAULT '',
    profession TEXT DEFAULT '',
    phone TEXT NOT NULL UNIQUE,
    whatsapp TEXT DEFAULT '',
    upazila TEXT DEFAULT 'গজারিয়া',
    village TEXT DEFAULT '',
    interest TEXT DEFAULT '',
    photo TEXT DEFAULT '',
    status TEXT DEFAULT 'active',
    joined_date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Emergency Blood Requests (জরুরি রক্তের আবেদন)
CREATE TABLE IF NOT EXISTS public.emergency_requests (
    id TEXT PRIMARY KEY,
    patient_name TEXT NOT NULL,
    blood_group TEXT NOT NULL,
    bags TEXT DEFAULT '1',
    time TEXT DEFAULT 'জরুরি',
    hospital TEXT DEFAULT '',
    contact TEXT DEFAULT '',
    phone TEXT NOT NULL,
    reason TEXT DEFAULT '',
    urgency TEXT DEFAULT 'জরুরি',
    status TEXT DEFAULT 'active', -- active, managed, cancelled
    managed_date TEXT DEFAULT '',
    donor_name TEXT DEFAULT '',
    donor_phone TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Notice Board (নোটিশ ও সার্কুলার)
CREATE TABLE IF NOT EXISTS public.notices (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    date TEXT DEFAULT '',
    priority TEXT DEFAULT 'normal', -- normal, urgent, pinned
    author TEXT DEFAULT 'পরিচালনা পরিষদ',
    signee_role TEXT DEFAULT 'সভাপতি',
    status TEXT DEFAULT 'active',
    summary TEXT DEFAULT '',
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Activities & Gallery (গ্যালারি ও সামাজিক কর্মকাণ্ড)
CREATE TABLE IF NOT EXISTS public.activities (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    media_type TEXT DEFAULT 'image', -- image, video
    media_url TEXT DEFAULT '',
    date TEXT DEFAULT '',
    location TEXT DEFAULT '',
    description TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Aid & Service Applications (মানবকল্যাণ ও সেবামূলক আবেদন)
CREATE TABLE IF NOT EXISTS public.aid_applications (
    id TEXT PRIMARY KEY,
    service_name TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT DEFAULT '',
    details TEXT DEFAULT '',
    status TEXT DEFAULT 'pending', -- pending, approved, rejected
    submitted_at TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Donation Records (রক্তদান সম্পন্ন ইতিহাস)
CREATE TABLE IF NOT EXISTS public.donation_records (
    id TEXT PRIMARY KEY,
    request_id TEXT DEFAULT '',
    patient_name TEXT DEFAULT '',
    patient_phone TEXT DEFAULT '',
    hospital TEXT DEFAULT '',
    blood_group TEXT DEFAULT '',
    bags TEXT DEFAULT '1',
    donor_name TEXT DEFAULT '',
    donor_phone TEXT DEFAULT '',
    donor_address TEXT DEFAULT '',
    donation_date TEXT DEFAULT '',
    managed_date TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    status TEXT DEFAULT 'managed',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Site Settings (ওয়েবসাইট কনফিগারেশন)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: Global Visitor Counter (ভিজিটর কাউন্টার)
CREATE TABLE IF NOT EXISTS public.visitor_counter (
    id TEXT PRIMARY KEY DEFAULT 'main',
    count BIGINT DEFAULT 1,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 2.1 UNIQUE PHONE CONSTRAINTS (এক নম্বরে একবারই রক্তদাতা বা স্বেচ্ছাসেবী নিবন্ধন)
-- ------------------------------------------------------------------------------
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'donors_phone_unique'
    ) THEN
        ALTER TABLE public.donors ADD CONSTRAINT donors_phone_unique UNIQUE (phone);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'volunteers_phone_unique'
    ) THEN
        ALTER TABLE public.volunteers ADD CONSTRAINT volunteers_phone_unique UNIQUE (phone);
    END IF;
EXCEPTION WHEN OTHERS THEN
    NULL;
END $$;

-- ------------------------------------------------------------------------------
-- 3. ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.aid_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

-- Clean existing policies (idempotent setup)
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public can view donors" ON public.donors;
    DROP POLICY IF EXISTS "Public can register as donor" ON public.donors;
    DROP POLICY IF EXISTS "Admins can update donors" ON public.donors;
    DROP POLICY IF EXISTS "Admins can delete donors" ON public.donors;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.donors;

    DROP POLICY IF EXISTS "Public can view volunteers" ON public.volunteers;
    DROP POLICY IF EXISTS "Public can register as volunteer" ON public.volunteers;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.volunteers;

    DROP POLICY IF EXISTS "Public can view emergency_requests" ON public.emergency_requests;
    DROP POLICY IF EXISTS "Public can create emergency request" ON public.emergency_requests;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.emergency_requests;

    DROP POLICY IF EXISTS "Public can view notices" ON public.notices;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.notices;

    DROP POLICY IF EXISTS "Public can view activities" ON public.activities;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.activities;

    DROP POLICY IF EXISTS "Public can submit aid application" ON public.aid_applications;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.aid_applications;

    DROP POLICY IF EXISTS "Public can view donation_records" ON public.donation_records;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.donation_records;

    DROP POLICY IF EXISTS "Public can view site_settings" ON public.site_settings;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.site_settings;

    DROP POLICY IF EXISTS "Public can view visitor_counter" ON public.visitor_counter;
    DROP POLICY IF EXISTS "Full access to authenticated" ON public.visitor_counter;
END $$;

-- A. PUBLIC READ POLICIES (সবার জন্য উন্মুক্ত প্রদর্শন)
CREATE POLICY "Public can view donors" ON public.donors FOR SELECT USING (true);
CREATE POLICY "Public can view volunteers" ON public.volunteers FOR SELECT USING (true);
CREATE POLICY "Public can view emergency_requests" ON public.emergency_requests FOR SELECT USING (true);
CREATE POLICY "Public can view notices" ON public.notices FOR SELECT USING (true);
CREATE POLICY "Public can view activities" ON public.activities FOR SELECT USING (true);
CREATE POLICY "Public can view donation_records" ON public.donation_records FOR SELECT USING (true);
CREATE POLICY "Public can view site_settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public can view visitor_counter" ON public.visitor_counter FOR SELECT USING (true);

-- B. PUBLIC INSERT POLICIES (ওয়েবসাইটে ভিজিটররা সরাসরি যেসব আবেদন করতে পারবেন)
CREATE POLICY "Public can register as donor" ON public.donors FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can register as volunteer" ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can create emergency request" ON public.emergency_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit aid application" ON public.aid_applications FOR INSERT WITH CHECK (true);

-- C. ADMIN POLICIES (লগইন করা অ্যাডমিনদের জন্য সম্পূর্ণ নিয়ন্ত্রণ)
-- When Admin signs in with Supabase Auth (authenticated role):
CREATE POLICY "Full access to authenticated on donors" ON public.donors FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on volunteers" ON public.volunteers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on emergency_requests" ON public.emergency_requests FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on notices" ON public.notices FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on activities" ON public.activities FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on aid_applications" ON public.aid_applications FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on donation_records" ON public.donation_records FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on site_settings" ON public.site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Full access to authenticated on visitor_counter" ON public.visitor_counter FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- D. ANON PERMISSIVE POLICIES FOR DIRECT PIN ADMIN ACCESS
-- Note: Allows frontend CRUD operations using Anon Key while maintaining client-side Admin PIN verification.
CREATE POLICY "Allow anon update and delete on donors" ON public.donors FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update and delete on volunteers" ON public.volunteers FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update and delete on emergency_requests" ON public.emergency_requests FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update and delete on notices" ON public.notices FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update and delete on activities" ON public.activities FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon select and update on aid_applications" ON public.aid_applications FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update and delete on donation_records" ON public.donation_records FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update on site_settings" ON public.site_settings FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon update on visitor_counter" ON public.visitor_counter FOR ALL TO anon USING (true) WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- 4. REALTIME REPLICATION (এক ডিভাইসের পরিবর্তন অন্য ডিভাইসে স্বয়ংক্রিয় রিয়েলটাইম আপডেট)
-- ------------------------------------------------------------------------------
ALTER PUBLICATION supabase_realtime ADD TABLE public.donors;
ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteers;
ALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.notices;
ALTER PUBLICATION supabase_realtime ADD TABLE public.activities;
ALTER PUBLICATION supabase_realtime ADD TABLE public.aid_applications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.donation_records;
ALTER PUBLICATION supabase_realtime ADD TABLE public.site_settings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_counter;

-- ------------------------------------------------------------------------------
-- 5. ATOMIC VISITOR INCREMENT FUNCTION (নিরাপদ ভিজিটর কাউন্টার)
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  INSERT INTO public.visitor_counter (id, count)
  VALUES ('main', 1)
  ON CONFLICT (id)
  DO UPDATE SET count = public.visitor_counter.count + 1, updated_at = NOW()
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ------------------------------------------------------------------------------
-- 6. SEED INITIAL DATA (প্রাথমিক ডিফল্ট ডেটা যা কখনোই হারাবে না)
-- ------------------------------------------------------------------------------

-- Seed Donors (হালিম দেওয়ান ও মোঃ মাসুম শিকদার)
INSERT INTO public.donors (id, name, father, blood_group, dob, gender, weight, phone, whatsapp, upazila, village, has_donated, last_donation_date, donation_count, verified, status, photo, is_demo)
VALUES 
(
  'CAF-BD-1001',
  'হালিম দেওয়ান',
  '',
  'B+',
  '1980-01-01',
  'পুরুষ',
  70,
  '01914927933',
  '01914927933',
  'গজারিয়া',
  'কলেজ রোড',
  'হ্যাঁ',
  '2026-03-25',
  5,
  true,
  'active',
  'assets/leader_halim.jpg',
  false
),
(
  'CAF-BD-1002',
  'মোঃ মাসুম শিকদার',
  '',
  'A+',
  '1985-05-10',
  'পুরুষ',
  68,
  '01785677062',
  '01785677062',
  'গজারিয়া',
  'হোগলাকান্দি, ভবেরচর, কলেজ রোড',
  'হ্যাঁ',
  '2026-08-02',
  21,
  true,
  'active',
  'assets/leader_masum.png',
  false
)
ON CONFLICT (id) DO NOTHING;

-- Seed Notices (৩টি অফিসিয়াল ডিফল্ট নোটিশ)
INSERT INTO public.notices (id, title, category, date, priority, author, signee_role, status, summary, content)
VALUES
(
  'NOT-2026-001',
  'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান ক্যাম্পেইন-২০২৬',
  'রক্তদান কর্মসূচি',
  '2026-10-25',
  'pinned',
  'হালিম দেওয়ান (সভাপতি)',
  'সভাপতি',
  'active',
  'আগামী শুক্রবার ভবেরচর কলেজ রোড প্রাঙ্গণে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও রক্তদান ক্যাম্পেইন অনুষ্ঠিত হবে।',
  'চাঁদের আলো ফাউন্ডেশনের সকল শুভাকাঙ্ক্ষী ও এলাকাবাসীর সদয় অবগতির জন্য জানানো যাচ্ছে যে, আর্ত মানবতার সেবায় নিয়মিত কর্মসূচির অংশ হিসেবে আগামী শুক্রবার সকাল ৯:০০ টা থেকে বিকেল ৫:০০ টা পর্যন্ত ভবেরচর কলেজ রোডস্থ অস্থায়ী কার্যালয়ে এক বিশাল ''বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান কর্মসূচি-২০২৬'' অনুষ্ঠিত হবে।\n\nউক্ত ক্যাম্পেইনে উপস্থিত থাকবেন গজারিয়া উপজেলার বিশিষ্ট সমাজসেবক, চিকিৎসকবৃন্দ ও ফাউন্ডেশনের কার্যনির্বাহী পরিষদের নেতৃবৃন্দ। ১৮ থেকে ৬০ বছর বয়সী সকল সুস্থ ব্যক্তিকে এই মহৎ রক্তদান কর্মসূচিতে অংশগ্রহণ করে মুমূর্ষু রোগীর পাশে দাঁড়ানোর উদাত্ত আহ্বান জানানো হচ্ছে।'
),
(
  'NOT-2026-002',
  'শীতার্ত ও সুবিধাবঞ্চিত মানুষের মাঝে শীতবস্ত্র বিতরণ সংক্রান্ত জরুরি বিজ্ঞপ্তি',
  'সমাজকল্যাণ',
  '2026-10-20',
  'urgent',
  'মোঃ মাসুম শিকদার (সাধারণ সম্পাদক)',
  'সাধারণ সম্পাদক',
  'active',
  'আসন্ন শীত মৌসুমে অসহায় ও দরিদ্র পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণের তালিকা প্রস্তুত কার্যক্রম শুরু হয়েছে।',
  'চাঁদের আলো ফাউন্ডেশনের উদ্যোগে আগামী মাসে গজারিয়া উপজেলার বিভিন্ন ইউনিয়নের প্রত্যন্ত অঞ্চলে অসহায় বিধবা, এতিম ও দরিদ্র পরিবারের মাঝে শীতবস্ত্র ও কম্বল বিতরণ কর্মসূচি পরিচালিত হবে।\n\nফাউন্ডেশনের সকল ইউনিয়ন ও ওয়ার্ড পর্যায়ের স্বেচ্ছাসেবীদের আগামী ৫ নভেম্বরের মধ্যে নিজ নিজ এলাকার প্রকৃত অসচ্ছল পরিবারের তালিকা প্রস্তুত করে সাধারণ সম্পাদকের নিকট জমা দেওয়ার জন্য নির্দেশ প্রদান করা হলো। যেকোনো তথ্যের জন্য সরাসরি হেল্পলাইনে (০১৯১৪-৯২৭৯৩৩) যোগাযোগ করার অনুরোধ করা হলো।'
),
(
  'NOT-2026-003',
  'ফাউন্ডেশনের আজীবন ও সাধারণ সদস্যপদ গ্রহণ নীতিমালা ও ফরম বিতরণ',
  'সাধারণ নোটিশ',
  '2026-10-10',
  'normal',
  'কার্যনির্বাহী পরিষদ (যৌথ)',
  'সাধারণ সম্পাদক',
  'active',
  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্রের ধারা-০৫ মোতাবেক নতুন সদস্যপদ গ্রহণের আবেদন আহ্বান করা যাচ্ছে।',
  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্র অনুযায়ী যারা আর্ত মানবতার সেবায় আত্মনিয়োগ করতে চান, তাদের জন্য আজীবন সদস্য ও সাধারণ সদস্যপদ গ্রহণের আবেদন উন্মুক্ত করা হয়েছে।\n\nআগ্রহী ব্যক্তিবর্গ ওয়েবসাইট অথবা কেন্দ্রীয় কার্যালয় (বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর) থেকে সদস্যপদ ফরম সংগ্রহ ও পূরণ করে জমা দিতে পারবেন। আজীবন সদস্যপদের এককালীন অনুদান ১০,০০০/- টাকা এবং সাধারণ সদস্যপদের মাসিক ফি ১০০/- টাকা নির্ধারণ করা আছে।'
)
ON CONFLICT (id) DO NOTHING;

-- Seed Activities (গ্যালারির ডিফল্ট ছবি ও তথ্য)
INSERT INTO public.activities (id, title, category, media_type, media_url, date, location, description)
VALUES
(
  'ACT-01',
  'গজারিয়ায় বিনামূল্যে রক্তের গ্রুপ নির্ণয়',
  'রক্তদান',
  'image',
  'assets/activity_blood.jpg',
  '2021-11-14',
  'কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়, ইমামপুর, গজারিয়া',
  'মুন্সীগঞ্জের গজারিয়া উপজেলার ইমামপুর ইউনিয়নের কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়ে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বাস্থ্য সচেতনতামূলক কর্মসূচি অনুষ্ঠিত হয়। এতে চার শতাধিক মানুষের রক্তের গ্রুপ নির্ণয় করা হয়।'
),
(
  'ACT-02',
  'অসহায় ও শীতার্ত মানুষের মাঝে শীতবস্ত্র বিতরণ',
  'ত্রাণ',
  'image',
  '',
  '2022-01-10',
  'হোগলাকান্দি, গজারিয়া',
  'শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ কর্মসূচি।'
),
(
  'ACT-03',
  'মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১',
  'বৃক্ষরোপণ',
  'image',
  'assets/activity_tree.jpg',
  '2021-07-06',
  'গজারিয়া, মুন্সীগঞ্জ',
  'পরিবেশের ভারসাম্য রক্ষা ও সবুজায়নের লক্ষ্যে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১ পরিচালিত হয় এবং বিভিন্ন প্রতিষ্ঠানে ফলজ ও বনজ গাছের চারা রোপণ করা হয়।'
)
ON CONFLICT (id) DO NOTHING;

-- Initial Visitor Counter Row
INSERT INTO public.visitor_counter (id, count)
VALUES ('main', 1)
ON CONFLICT (id) DO NOTHING;
